
'use strict';

const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      insert = require('gulp-insert'),
      jsRoot = 'assets/js/';

exports.custom = (done) => {
  return gulp
    .src([
      jsRoot + 'footer/vendor/*',
      jsRoot + 'footer/custom/Let.js',
      jsRoot + 'footer/custom/*'
    ])
    .pipe(concat(jsRoot + 'concat/footer.custom.js'))
    .pipe(gulp.dest('.'));
  done();
}

exports.data = (done) => {
  return gulp
    .src([
      jsRoot + 'footer/data/Let.js',
      jsRoot + 'footer/data/Shuffle.js',
      jsRoot + 'footer/data/*'
    ])
    .pipe(concat(jsRoot + 'footer.data.js'))
    .pipe(gulp.dest('.'));
  done();
}
