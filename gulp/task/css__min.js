/*---------------------------------------------
 * CSS:MIN CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Minifies files *.css, output is the same folder
 */

// (function(){
//   'use strict';
//
//   module.exports = function(GULP, FOLDER, GLP, cssmin){
//     GULP.task(
//       'css:min',
//       'Minifica archivos CSS. Los minifica en la misma carpeta: ' + GLP.path.join(FOLDER.build, FOLDER.css),
//       cssMin
//     );
//     function cssMin(){
//       return 	GULP.src(GLP.path.join(FOLDER.build, FOLDER.css)+'**/*.css')
//         .pipe(GLP.cleanCss(cssmin))
// 				.pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css)))
//     }
//   };
// })();
