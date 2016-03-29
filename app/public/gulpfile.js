var gulp = require('gulp');
var tslint = require('gulp-tslint');
var exec = require('gulp-exec');
// var exec = require('child_process').exec;
var jasmine = require('gulp-jasmine');
var gulp = require('gulp-help')(gulp);
var tsconfig = require('gulp-tsconfig-files');
var path = require('path');
var inject = require('gulp-inject');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var dtsGenerator = require('dts-generator');
var flatten = require('gulp-flatten');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

require('dotbin');

var tsFilesGlob = (function (c) {
  return c.filesGlob || c.files || '**/*.ts';
})(require('./tsconfig.json'));

var appName = (function (p) {
  return p.name;
})(require('./../package.json'));

gulp.task('update-tsconfig', 'Update files section in tsconfig.json', function () {
  gulp.src(tsFilesGlob).pipe(plumber()).pipe(tsconfig());
});

gulp.task('clean', 'Cleans the generated js files from lib directory', function () {
  return del([
    'dist/**/*'
  ]);
});

gulp.task('tslint', 'Lints all TypeScript source files', function () {
  return gulp.src(tsFilesGlob)
    .pipe(plumber())
    .pipe(tslint())
    // .on('error', function)
    .pipe(tslint.report('verbose'));
});

// gulp.task('gen-def', 'Generate a single .d.ts bundle containing external module declarations exported from TypeScript module files', function (cb) {
//   return dtsGenerator.default({
//     name: appName,
//     project: '.',
//     out: './dist/' + appName + '.d.ts',
//     exclude: ['node_modules/**/*.d.ts', 'typings/**/*.d.ts']
//   });
// });

gulp.task('copy-html', 'copies the html files to the dist folder', function(cb){
   return gulp.src('./src/**/*.html').pipe(plumber()).pipe(gulp.dest('./dist'));
});

var paths = {
  tsDef : "./typings/",
  importedTypings: "./jspm_packages/**/*.d.ts"  
};

gulp.task('copy-defs', function(){
    return gulp.src(paths.importedTypings)
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(paths.tsDef + "/jspmImports/"));
});

gulp.task('_build', 'INTERNAL TASK - Compiles all TypeScript source files', function (cb) {
  exec('tsc --version', function (err, stdout, stderr) {
    console.log('TypeScript ', stdout);
    if (stderr) {
      console.log(stderr);
    }
  });
 
 var options = {
    continueOnError: true, // default = false, true means don't emit error event 
    pipeStdout: false // default = false, true means stdout is written to file.contents
  };

var reportOptions = {
  	err: true, // default = true, false means don't write err 
  	stderr: true, // default = true, false means don't write stderr 
  	stdout: true // default = true, false means don't write stdout 
  }

  return gulp.src(tsFilesGlob)
  .pipe(exec('tsc',options, function (err, stdout, stderr) {
            console.log('Success');
            console.log(stdout);
            if (stderr) {
            console.log(stderr);
            }
            cb(err);
        }))
  .pipe(exec.reporter(reportOptions));

//   return exec('tsc', options
        // // , function (err, stdout, stderr) {
        // //     console.log(stdout);
        // //     if (stderr) {
        // //     console.log(stderr);
        // //     }
        // //     cb(err);
        // // }
//   )
//   .pipe(exec.reporter(reportOptions));
});

//run tslint task, then run update-tsconfig and gen-def in parallel, then run _build
// gulp.task('build', 'Compiles all TypeScript source files and updates module references', gulpSequence(['update-tsconfig'], '_build', 'copy-html'));
gulp.task('build', 'Compiles all TypeScript source files and updates module references',

// function(callback){ gulpSequence('tslint', ['update-tsconfig', 'copy-defs'], '_build', 'clean', 'copy-html')()});
function(callback){ gulpSequence(['update-tsconfig', 'copy-defs'], '_build', 'clean', 'copy-html')()});

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function () {
  return gulp.src('test/*.js')
    .pipe(jasmine());
});

gulp.task('watch', 'Watches ts source files and runs build on change', function () {
    
  gulp.watch('src/**/*.html', ['copy-html']);
  gulp.watch('src/**/*.ts', ['build']);
  
//   gulp.watch('src/**/*.ts', function (event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      
//       gulp.tasks.build.fn();
      
//       console.log('Task count: ' + gulp.tasks.build);
//   });
  
});
