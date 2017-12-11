/*---------------------------------------------
 * COPY:FAVICON CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Copy favicon.ico of assets and paste into folder build/
 */

(function(){
  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
    GULP.task(
      'copy:favicon',
      'Copia favicon.ico de la carpeta de assets y lo copia en build', 
      copyFavicon
    );

    function copyFavicon(){
      return GULP.src(GLP.path.join(FOLDER.assets)+'*.ico')
        .pipe(GULP.dest(GLP.path.join(FOLDER.build)));
    }
  }
})();
