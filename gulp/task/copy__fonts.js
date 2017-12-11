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
      'copy:fonts',
      'Copia favicon.ico de la carpeta de assets y lo copia en build', 
      copyFonts
    );

    function copyFonts(){
      return GULP.src(GLP.path.join(FOLDER.assets, FOLDER.fonts)+'**/*.*')
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css, FOLDER.fonts)));
    }
  }
})();
