var gulp = require("gulp");

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

gulp.task('serve', function() {

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]',
    history: {
      index: './index.html'
    }
  }));

  browserSync.init({
    server: {
      baseDir: './',
    },
    scrollElements: ['.test'],
    open: false,
    reloadOnRestart: true
  });
});

gulp.task('default', ['serve'], function() {});
