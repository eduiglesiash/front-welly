// ==============================================
//      GULP'S FILE CONFIGURATION
// ==============================================
//	CONTENT THIS FILE:
//      # DEFAULT
//		  # CACHE TEMPLATES
//      # CLEAN
//        * CLEAN:CSS
//        * CLEAN:FONT
//        * CLEAN:SCRIPT
//        * CLEAN:TEMPLATE
//        * CLEAN:ASSETS
//      # CONSOLE
//        * CONSOLE:GLP
//      # COPY
//        * COPY:IMG
//        * COPY:MEDIA
//        * COPY:FAVICON
//        * COPY:FONTS
//      # CSS
//      # DIST
//        * DIST:MIN
//        * DIST:NORMAL
//		  # JS
//      # POST CSS
//      # REPORT: ESLINT
//      # SCSS
//      # SERVER AND WATCH
//		  # TEMPLATES
//      # W3C
//
//  TASK GROUP
//      # DEVELOP
//      # DIST
//      # CLEAN:ALL
//      # COPY:ALL
//      # BUILD

'use strict';

// ==============================================
//      IMPORT LIB'S
// ==============================================
import gulp from 'gulp';


// ==============================================
//      IMPORT TASKS
// ==============================================
import {templates} from "./gulp/task/templates";
import {styles} from "./gulp/task/scss";
import {serverAndWatch} from "./gulp/task/server-and-watch";
import {
  cleanAssets,
  cleanFonts,
  cleanScript,
  cleanStyles,
  cleanTemplates
} from "./gulp/task/clean";
import {
  copyFavicon,
  copyFonts,
  copyImg,
  copyMedia
} from "./gulp/task/copy";


// ==============================================
//      TASK # TEMPLATES
// ==============================================
gulp.task('templates', templates);


// ==============================================
//      TASK # SCSS
// ==============================================
gulp.task('styles', styles);


// ==============================================
//      TASK # SERVER AND WATCH
// ==============================================
gulp.task('serve', serverAndWatch);


// ==============================================
//      TASKS # CLEAN
// ==============================================
gulp.task('clean:templates', cleanTemplates);
gulp.task('clean:scripts', cleanScript);
gulp.task('clean:fonts', cleanFonts);
gulp.task('clean:styles', cleanStyles);
gulp.task('clean:assets', cleanAssets);


// ==============================================
//      TASKS # COPY
// ==============================================
gulp.task('copy:media', copyMedia);
gulp.task('copy:fonts', copyFonts);
gulp.task('copy:img', copyImg);
gulp.task('copy:favicon', copyFavicon);

