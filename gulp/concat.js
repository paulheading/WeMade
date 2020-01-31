
'use strict';

const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      insert = require('gulp-insert'),
      jsRoot = 'assets/js/';

exports.vendor = (done) => {
  return gulp
    .src(jsRoot + 'footer/vendor/*')
    .pipe(concat(jsRoot + 'footer.vendor.js'))
    .pipe(gulp.dest('.'));
  done();
}

exports.custom = (done) => {
  return gulp
    .src([
      jsRoot + 'footer/custom/Settings.js',
      jsRoot + 'footer/custom/*',
      jsRoot + 'footer/custom/ThemeHome.js'
    ])
    .pipe(concat(jsRoot + 'concat/footer.custom.js'))
    .pipe(gulp.dest('.'));
  done();
}
