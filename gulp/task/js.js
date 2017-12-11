/*---------------------------------------------
 * js CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Concat *.js files, output -> build/js/
 */


(function(){
  'use strict';

  module.exports = function(GULP, FOLDER, GLP, UTILS, gJs, $common){
    GULP.task(
      'js',
      'Concatena archivos Js. Genera: ' + GLP.path.join(FOLDER.build, FOLDER.js) +js.fileDist ,
      js
    );
    
    
    function js(){
      return 	GULP.src([
        GLP.path.join(FOLDER.src, FOLDER.js, FOLDER.dev) + gJs.fileDev,
        GLP.path.join(FOLDER.src, FOLDER.js, FOLDER.comp) + '**.*',
        GLP.path.join(FOLDER.src, FOLDER.js, FOLDER.util) + '**.*'
      ])
        .pipe(GLP.eslint($common.eslint.configFile))
        .pipe(GLP.eslint.format(gJs.eslint.format))
				.pipe(GLP.concat(gJs.fileDist))
				.pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.js)))
				.pipe(GLP.browserSync.stream());
    }
  };
})();
