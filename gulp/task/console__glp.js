/*---------------------------------------------
 * CONSOLE:GLP CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Simple console log for show object content GLP
 */


(function(){

  'use strict';

  module.exports = function(GULP, GLP){
		
    GULP.task(
      'console:GLP',
      'Comprueba el contenido del objeto plg',
      consolePlg
    );
    
    
    function consolePlg(){
      console.log(GLP);
    }
  };
})();
