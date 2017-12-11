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
      'clean:assets',
      'Elminina los archivos css de la carpeta build.',
      cleanAssets
    );
    
    
    function cleanAssets(){
      return GLP.del([
        GLP.path.join(FOLDER.build, FOLDER.assets)
      ]);
    }
  };
})();
