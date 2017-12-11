/*---------------------------------------------
 * DIST:NORMAL CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Generate ditributive normal version for project. Output -> dist/[date]/normal/
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'dist:normal',
      'Genera la version de distribución para la entrega a proyecto. Usar a través de "gulp dist"',
      distNormal
    );
    
    
    function distNormal(){
      return GULP.src(GLP.path.join(FOLDER.build)+'**/*')
      .pipe(GULP.dest(GLP.path.join(FOLDER.dist, FOLDER.thisDay, FOLDER.normal)))
    }
  };
})();
