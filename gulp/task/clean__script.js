/*---------------------------------------------
 * CLEAN:js CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Delete files *.js FOLDER build/js to avoid duplication 
 */

(function(){
  'use strict';
  module.exports = function(GULP, GLP, FOLDER){
    GULP.task(
      'clean:scripts',
      'Elminina los archivos *.js de la carpeta build, para evitar conservar los archivos que ya no sirven. ',
      cleanScripts
    );
    function cleanScripts(){
      return GLP.del([
        GLP.path.join(FOLDER.build, FOLDER.js)
      ]);
    }
  };
})();
