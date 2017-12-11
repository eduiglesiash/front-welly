/*---------------------------------------------
 * JS:MIN CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Minifies files *.js, output is the same folder
 */

(function(){
  'use strict';

  module.exports = function(GULP, FOLDER, GLP){
    GULP.task(
      'js:min',
      'Minifica y ofusca los archivos Js. Los minifica en la misma carpeta: ' + GLP.path.join(FOLDER.build, FOLDER.js) ,
      jsMin
    );
    function jsMin(){
      return 	GULP.src(GLP.path.join(FOLDER.build, FOLDER.js)+'**/*.js')
        .pipe(GLP.uglify())
				.pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.js)))
				.pipe(GLP.browserSync.stream());
    }
  };
})();
