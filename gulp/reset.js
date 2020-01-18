
'use strict';

const gulp = require('gulp'),
      del  = require('del'),
      dbox = '../../Dropbox/Sites/mindsets/';

exports.all = (done) => {
  return del([
    dbox,
    'assets/js/concat',
    'assets/js/custom.min.js'], { force: true });
  done();
}
