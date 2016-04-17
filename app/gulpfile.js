var gulp = require('gulp');
var tslint = require('gulp-tslint');
var jasmine = require('gulp-jasmine');
var gulp = require('gulp-help')(gulp);
var tsconfig = require('gulp-tsconfig-files');
var path = require('path');
var del = require('del');
var dtsGenerator = require('dts-generator');
var plumber = require('gulp-plumber');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');

require('dotbin');

var paths = {
    tsDef: "./typings/",
    srcFolder: './src',
    sharedSrcFolderName: 'SHARED_SRC',
    destinationFolder: './lib'
};

var tsFilesGlob = (function(c) {
    return c.filesGlob || c.files || '**/*.ts';
})(require('./tsconfig.json'));

var appName = (function(p) {
    return p.name;
})(require('./package.json'));


gulp.task('clean', 'Cleans the generated js files from lib directory', function() {
    return del([
        paths.destinationFolder + '/**/*'
    ]);
});

gulp.task('copy-shared-src', 'copies the shared files typescript files to src folder', ['clean'], function(cb) {
    return gulp.src('./'+ paths.sharedSrcFolderName +'/**/*.ts').pipe(plumber()).pipe(gulp.dest(paths.srcFolder + '/' + paths.sharedSrcFolderName));
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
        .pipe(tsc(tsProject, '', tsc.reporter.fullReporter(true)));
    tsResult.dts.pipe(gulp.dest(paths.destinationFolder));
    return tsResult.js
        .pipe(gulp.dest(paths.destinationFolder + '/'));
};

gulp.task('tsc', 'Compiles all TypeScript source files', ['update-tsconfig'], buildMethod);

gulp.task('build', 'Does the build workflow', ['tsc', 'tslint'], buildMethod);

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function() {
    return gulp.src('test/*.js')
        .pipe(jasmine());
});

gulp.task('watch', 'Watches ts source files and runs build on change', function() {
    gulp.watch('src/**/*.ts', ['build']);
    gulp.watch('./' + paths.sharedSrcFolderName + '/**/*.ts', ['build']);
});

gulp.task('default', ['build']);