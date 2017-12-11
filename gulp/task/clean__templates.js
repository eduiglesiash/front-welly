/*---------------------------------------------
 * CLEAN:TEMPLATES CONFIGURATION TASK
 *----------------------------------------------/

/*
 * Delete files *.html FOLDER build/ to avoid duplication 
 */


(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'clean:templates',
      'Elminina los archivos *.html de la carpeta build, para evitar conservar los archivos que ya no sirven. ',
      cleanTemplates
    );
    
    
    function cleanTemplates(){
      return GLP.del([
        GLP.path.join(FOLDER.build)+'*.html'
      ]);
    }
  };
})();
