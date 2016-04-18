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

var paths = {
    tsDef: "./typings/",
    importedTypings: "./jspm_packages/**/*.d.ts",
    srcFolder: './src',
    sharedSrcFolderName: 'SHARED_SRC',
    destinationFolder: './dist'
};

var tsFilesGlob = (function(c) {
    return c.filesGlob || c.files || '**/*.ts';
})(require('./tsconfig.json'));

var appName = (function(p) {
    return p.name;
})(require('./../package.json'));


gulp.task('clean-js', 'Cleans the generated js files from dist directory', function() {
    return del([
        paths.destinationFolder + '/**/*.js'
    ]);
});

gulp.task('clean-html', 'Cleans the generated html files from dist directory', function() {
    return del([
        paths.destinationFolder + '/**/*.html'
    ]);
});

gulp.task('copy-defs', 'copies the ambient d.ts definition files to the jsImports folder, where they are referenced from', ['clean-js'], function() {
    return gulp.src(paths.importedTypings)
        .pipe(plumber())
        .pipe(flatten())
        .pipe(gulp.dest(paths.tsDef + "/jspmImports/"));
});

gulp.task('copy-shared-src', 'copies the shared files typescript files to src folder', ['clean-js'], function(cb) {
    return gulp.src('./../'+ paths.sharedSrcFolderName +'/**/*.ts').pipe(plumber()).pipe(gulp.dest(paths.srcFolder + '/' + paths.sharedSrcFolderName));
});

gulp.task('copy-html', 'copies the html files to the dist folder', ['clean-html'], function(cb) {
    return gulp.src('./src/**/*.html').pipe(plumber()).pipe(gulp.dest(paths.destinationFolder));
});

gulp.task('update-tsconfig', 'Update files section in tsconfig.json', ['copy-shared-src'], function() {
    gulp.src(tsFilesGlob).pipe(plumber()).pipe(tsconfig());
});

gulp.task('tslint', 'Lints all TypeScript source files', ['update-tsconfig'], function() {
    return gulp.src(tsFilesGlob)
        .pipe(plumber())
        .pipe(tslint({}))
        .pipe(tslint.report('prose', { emitError: false }));
});

var buildMethod = function(cb) {
    console.warn(tsFilesGlob);
    var tsResult = gulp.src(tsFilesGlob)
           .pipe(sourcemaps.init())
        .pipe(tsc(tsProject, '', tsc.reporter.fullReporter(true)));
    tsResult.dts.pipe(gulp.dest(paths.destinationFolder));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.destinationFolder + '/'));
};

gulp.task('tsc', 'Compiles all TypeScript source files', ['update-tsconfig', 'copy-defs'], buildMethod);

gulp.task('build', 'Does the build workflow', ['tsc', 'tslint', 'copy-html'], buildMethod);

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function() {
    return gulp.src('test/*.js')
        .pipe(jasmine());
});

gulp.task('watch', 'Watches ts source files and runs build on change', function() {
    // gulp.watch('src/**/*.html', ['copy-html']);
    gulp.watch('src/**/*.{ts,html}', ['build']);
    gulp.watch('../' + paths.sharedSrcFolderName + '/**/*.ts', ['build']);
});
