// ==============================================
//      SCSS CONFIGURATION TASK
// ==============================================
'use strict';



// IMPORT
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import cached from 'gulp-changed';
import scss from 'gulp-sass';
import sourceMap from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import {conditional, errorCompile} from "../utils";

// IMPORT CONFIG
import config from '../gulp.config';

const bs = browserSync.create();

export function styles() {

  return gulp.src(config.path.styles + config.styles.fileMain)
    .pipe(conditional(config.debug.styles, debug()))
    .pipe(cached(config.styles.namecache))
    .pipe(plumber(plumber({
      errorHandler: errorCompile
    })))
    .pipe(sourceMap.init())
    .pipe(scss(config.styles.options))
    .pipe(sourceMap.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.path.build.css))
    //.pipe(bs.reload)
}


/*
 * Compile files *.scss of our dev
 */


// (function(){
//   'use strict';
//
//   module.exports = function (GULP, FOLDER, GLP, UTILS, gScss){
//
//     GULP.task(
//       'scss',
//       'Compila nuestro archivos SCSS. Compila en: ' + GLP.path.join(FOLDER.build, FOLDER.css),
//       scss
//     );
//
//     function scss(){
//       return	GULP.src(GLP.path.join(FOLDER.src, FOLDER.scss) + '*.scss')
//
//         .pipe(GLP.plumber({
//           errorHandler: function(err){
//             return UTILS.errorCompile(GLP, err, this)
//           }
//         }))
//         .pipe(GLP.sourcemaps.init())
// 				.pipe(GLP.sass(gScss.optScss))
//         .pipe(GLP.sourcemaps.write())
// 				.pipe(GLP.autoprefixer(gScss.autoprefix))
//         .pipe(GLP.groupCssMediaQueries())
//         .pipe(GLP.pixrem(gScss.pixrem))
//         .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css)))
// 				.pipe(GLP.browserSync.stream());
//     }
//   };
// })();
