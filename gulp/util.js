
'use strict';

const gulp        = require('gulp'),
      babel       = require('gulp-babel'),
      maps        = require('gulp-sourcemaps'),
      rename      = require('gulp-rename'),
      uglify      = require('gulp-uglify'),
      concat      = require('gulp-concat'),
      imagemin    = require('gulp-imagemin'),
      del         = require('del'),
      replace     = require('gulp-replace'),
      dBox        = '../../Dropbox/Sites/mindsets/',
      jsRoot      = 'assets/js/';

exports.minify = (done) => {
  return gulp.src(jsRoot + 'concat/footer.custom.js')
    .pipe(babel({ presets : ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(rename({ suffix : '.min' }))
    .pipe(gulp.dest(jsRoot));
  done();
}

exports.move = (done) => {
  return gulp
  .src('js/minify/*')
  .pipe(gulp.dest('./js'));
  done();
}

exports.tidy = (done) => {
  return del(jsRoot + 'concat');
  done();
}

exports.send = (done) => {
  return gulp
    .src(['**/*','!./node_modules/**'])
    .pipe(gulp.dest(dBox));
  done();
}

exports.crunch = (done) => {
  return gulp.src(['imgs/*/*','imgs/*'])
  .pipe(imagemin())
  .pipe(gulp.dest('imgs'));
  done();
}

exports.bust = (done) => {
  let bust = new Date().getTime();
  return gulp.src([
    '_includes/html/head.liquid',
    '_includes/html/scripts.liquid'],{ base : '.' })
  .pipe(replace(/v=\d+/g, function() { return 'v=' + bust; }))
  .pipe(gulp.dest('.'));
  done();
}
