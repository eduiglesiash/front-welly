/*---------------------------------------------
 * COPY:ASSETS CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Copy folder assets and paste into folder build/
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'copy:media',
      'Copia la carpeta /assets dentro de /build',
      copyMedia
    );

    function copyMedia(){
      return GULP.src(GLP.path.join(FOLDER.assets, FOLDER.media)+'**/*.*')
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.assets, FOLDER.media)))
    }
  };
})();
