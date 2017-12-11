/*---------------------------------------------
 * CLEAN:FONTS CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Delete files [fonts] folder build/css/fonts to avoid duplication 
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'clean:fonts',
      'Elminina las fuentes de la carpeta build, para evitar conservar los archivos que ya no sirven.',
      cleanFonts
    );
    
    
    function cleanFonts(){
      return GLP.del([
        GLP.path.join(FOLDER.build, FOLDER.css, FOLDER.fonts)
      ]);
    }
  };
})();
