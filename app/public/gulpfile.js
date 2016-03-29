var gulp = require('gulp');
var tslint = require('gulp-tslint');
var exec = require('gulp-exec');
// var exec = require('child_process').exec;
var jasmine = require('gulp-jasmine');
var gulp = require('gulp-help')(gulp);
var tsconfig = require('gulp-tsconfig-files');
var path = require('path');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var dtsGenerator = require('dts-generator');
var flatten = require('gulp-flatten');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

require('dotbin');

var destinationFolder = './dist';

var tsFilesGlob = (function(c) {
    return c.filesGlob || c.files || '**/*.ts';
})(require('./tsconfig.json'));

var appName = (function(p) {
    return p.name;
})(require('./../package.json'));

gulp.task('update-tsconfig', 'Update files section in tsconfig.json', function() {
    gulp.src(tsFilesGlob).pipe(plumber()).pipe(tsconfig());
});

gulp.task('clean', 'Cleans the generated js files from lib directory', function() {
    return del([
        'dist/**/*'
    ]);
});

gulp.task('tslint', 'Lints all TypeScript source files', function() {
    return gulp.src(tsFilesGlob)
        .pipe(plumber())
        .pipe(tslint({}))
        .pipe(tslint.report('prose', { emitError: false }));
});

gulp.task('copy-html', 'copies the html files to the dist folder', function(cb) {
    return gulp.src('./src/**/*.html').pipe(plumber()).pipe(gulp.dest(destinationFolder));
});

var paths = {
    tsDef: "./typings/",
    importedTypings: "./jspm_packages/**/*.d.ts"
};

gulp.task('copy-defs', function() {
    return gulp.src(paths.importedTypings)
        .pipe(plumber())
        .pipe(flatten())
        .pipe(gulp.dest(paths.tsDef + "/jspmImports/"));
});

var buildMethod = function(cb) {
    console.warn(tsFilesGlob);
    var tsResult = gulp.src(tsFilesGlob)
           .pipe(sourcemaps.init())
        .pipe(tsc(tsProject, '', tsc.reporter.fullReporter(true)));
    tsResult.dts.pipe(gulp.dest(destinationFolder));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinationFolder + '/'));
};

gulp.task('_build', 'INTERNAL TASK - Compiles all TypeScript source files', buildMethod);

gulp.task('clean-build', 'Cleans and then compiles typescript', ['clean'], buildMethod);

gulp.task('build', 'Compiles all TypeScript source files and updates module references',
    function(callback) { gulpSequence('tslint', ['update-tsconfig', 'copy-defs', 'clean'], '_build', 'copy-html')() }
);

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function() {
    return gulp.src('test/*.js')
        .pipe(jasmine());
});

gulp.task('watch', 'Watches ts source files and runs build on change', function() {

    gulp.watch('src/**/*.html', ['copy-html']);
    gulp.watch('src/**/*.ts', ['tslint', 'clean-build']);
});
