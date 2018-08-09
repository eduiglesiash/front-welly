//==============================================
//      TASKS SERVE (https://browsersync.io/)
//==============================================

// IMPORTS
import gulp from 'gulp';
import browserSync from 'browser-sync';


import config from '../gulp.config';

const bs = browserSync.create();

export function serverAndWatch() {

  // init server
  bs.init(config.browserSync);

  // Watch files
  gulp.watch(config.path.templates + '**/*.pug', ['templates']);
  gulp.watch(config.path.styles + '**/*.scss', ['styles']);

  // Browser reload when there is change in html files
  gulp.watch(config.path.build + '**/*.html').on('change', bs.reload);

}
