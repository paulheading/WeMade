
'use strict';

const gulp   = require('gulp'),
      del    = require('del'),
      dbox   = '../../Dropbox/Sites/wemade/',
      jsRoot = 'assets/js/';

exports.all = (done) => {
  return del([
    dbox,
    jsRoot + '*',
    '!' + jsRoot + 'footer'
    ], { force: true });
  done();
}
