
'use strict';

const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      insert = require('gulp-insert'),
      jsRoot = 'assets/js/';

exports.custom = (done) => {
  return gulp
    .src([
      jsRoot + 'vendor/*',
      jsRoot + 'custom/Let.js',
      jsRoot + 'custom/*',
      ! + jsRoot + 'custom/data/*'
    ])
    .pipe(concat(jsRoot + 'concat/custom.js'))
    .pipe(gulp.dest('.'));
  done();
}

exports.data = (done) => {
  return gulp
    .src([
      jsRoot + 'custom/data/Layout.js',
      jsRoot + 'custom/data/*'
    ])
    .pipe(concat(jsRoot + 'data.js'))
    .pipe(gulp.dest('.'));
  done();
}
