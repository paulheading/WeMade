
'use strict';

const gulp   = require('gulp'),
      Concat = require('./gulp/concat.js'),
      Reset  = require('./gulp/reset.js'),
      Util   = require('./gulp/util.js');

gulp.task('concat:custom', Concat.custom);
gulp.task('concat:data',   Concat.data);
gulp.task('minify', Util.minify);
gulp.task('tidy',   Util.tidy);
gulp.task('send',   Util.send);
gulp.task('bust',   Util.bust);
gulp.task('reset',  Reset.all);

gulp.task('watch',function(done) {
  gulp.watch(['assets/js/custom/**/*'],gulp.series(['default']));
  done();
})

gulp.task('default',gulp.series([
  'reset',
  'concat:custom',
  'concat:data',
  'minify',
  'tidy',
  'bust'
  // 'send'
]));
