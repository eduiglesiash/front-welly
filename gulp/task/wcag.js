/*---------------------------------------------
 * WCAG CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Genera report of accessibility
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER, UTILS, gWcag){
    GULP.task(
      'wcag',
      'BETA - Valida la accesibilidad de nuestros desarrollos en base a la WCAG y genera report',
      wcag
    );
    
    
    function wcag(){
      return GULP.src(GLP.path.join(FOLDER.build) + '**/*.html')
          .pipe(GLP.wcagAccessibility(gWcag))
    }
  }
})();
