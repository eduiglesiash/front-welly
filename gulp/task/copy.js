// ==============================================
//      CONFIGURATION TASKS COPY
// ==============================================


// Import libs

import gulp from 'gulp';


// Import config
import config from '../gulp.config';


// Copy files media
export function copyMedia() {
  return gulp.src(config.path.assets.media + '**/*.*')
    .pipe(gulp.dest(config.path.build.assets))
}


// Copy files fonts
export function copyFonts() {
  return gulp.src(config.path.assets.fonts + '**/*.*')
    .pipe(gulp.dest(config.path.build.fonts))
}


// Copy files img
export function copyImg() {
  return gulp.src(config.path.assets.img + '**/*.*')
    .pipe(gulp.dest(config.path.build.assets.img))
}


// Copy favicon.ico into assets folder
export function copyFavicon() {
  return gulp.src(config.path.assets + '*.ico')
    .pipe(gulp.dest(config.path.build.root))
}
