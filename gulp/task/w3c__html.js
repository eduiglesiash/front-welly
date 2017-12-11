/*---------------------------------------------
 * W3C:HTML CONFIGURATION TASK
 *----------------------------------------------*/

 /*
 * Validate html w3c 
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER, UTILS, gW3cHtml){
    GULP.task(
      'w3c:html',
      'Comprueba nuestro código CSS basado en las especificaciones de la W3C',
      w3cHtml
    );
    
    
    function w3cHtml(){
      GULP.src('')
          .pipe(GLP.w3cHtmlValidation(gW3cHtml))
    }
  }
})();
