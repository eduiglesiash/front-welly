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
      'copy:img',
      'Copia la carpeta /assets dentro de /build',
      copyImg
    );

    function copyImg(){
      return GULP.src(GLP.path.join(FOLDER.assets, FOLDER.img)+'**/*.*')
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.assets, FOLDER.img)))
    }
  };
})();
