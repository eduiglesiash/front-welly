/*---------------------------------------------
 * W3C:CSS CONFIGURATION TASK
 *----------------------------------------------*/

 /*
 * Compile template .jade
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER, UTILS,  gCommon){
    GULP.task(
      'w3c:css',
      'BETA - Comprueba nuestro código CSS basado en las especificaciones de la W3C',
      w3cCSS
    );
    
    
    function w3cCSS(){
      GULP.src(GLP.path.join(FOLDER.build, FOLDER.css) + '**/*.css')
          .pipe(GLP.w3cCss(gCommon.proxy))
          .pipe(GLP.util.buffer(function(err, files) {
          }))
    }
  }
})();
