/*---------------------------------------------
 * CLEAN:CSS CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Delete files *.css folder build/css to avoid duplication 
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'clean:css',
      'Elminina los archivos css de la carpeta build.',
      cleanCss
    );
    
    
    function cleanCss(){
      return GLP.del([
        GLP.path.join(FOLDER.build, FOLDER.css)+'**/*.css'
      ]);
    }
  };
})();
