// ==============================================
//      TEMPLATE CONFIGURATION
// ==============================================
'use strict';

//  IMPORTS
import gulp from 'gulp';
import pug from 'gulp-pug';
import pugInheritance from 'gulp-pug-inheritance';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import cached from 'gulp-changed';
import rename from 'gulp-rename';
import filter from 'gulp-filter';
import {conditional, errorCompile} from "../utils";

// IMPORT CONFIG
import config from '../gulp.config';


export function templates() {
  return gulp.src(config.path.templates + '**/*.pug')
    .pipe(conditional(config.debug.pug, debug()))
    .pipe(cached(config.pug.namecache))
    .pipe(plumber(plumber({
      errorHandler: errorCompile
    })))
    .pipe(pugInheritance(config.pug.inheritance))
    .pipe(filter((file) => {
      if (file.relative.search(config.pug.folderViews) !== -1) return file.relative;
    }))
    .pipe(rename((path) => {
      path.dirname = config.pug.rename.dirname
    }))
    .pipe(pug(config.pug.options))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.path.build.root))
}


// (function () {
//   'use strict';
//
//   module.exports = function (GULP, FOLDER, GLP, UTILS, gTemplates) {
//     GULP.task(
//       'templates',
//       'Compila archivos .jade',
//       templates
//     );
//
//     function templates() {
//       return GULP.src(GLP.path.join(FOLDER.src, FOLDER.templates) + '**/*.' + gTemplates.extension)
//         .pipe(GLP.plumber({
//           errorHandler: function (err) {
//             return UTILS.errorCompile(GLP, err, this)
//           }
//         }))
//         .pipe(GLP.changed(FOLDER.build, {extension: 'html'}))
//         .pipe(GLP.cached(gTemplates.nameCache))
//         .pipe(GLP.if(gTemplates.extension === 'jade', GLP.jadeInheritance(gTemplates.inheritanceOpt), GLP.pugInheritance(gTemplates.inheritanceOpt)))
//         .pipe(GLP.filter(function (file) {
//           if (file.relative.search(gTemplates.filterTemplates) !== -1)
//             return file.relative;
//         }))
//         // .pipe(GLP.debug())
//         .pipe(GLP.if(gTemplates.extension === 'jade', GLP.jade(gTemplates.templatesOpt), GLP.pug(gTemplates.templatesOpt)))
//         .pipe(GLP.flatten())
//         .pipe(GULP.dest(FOLDER.build))
//         .pipe(GLP.browserSync.stream());
//     }
//   };
// })();
