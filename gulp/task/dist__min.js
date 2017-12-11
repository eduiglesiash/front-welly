/*---------------------------------------------
 * DIST:MIN CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Generate ditributive minifies version for project. Output -> dist/[date]/min/
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
		
    GULP.task(
      'dist:min',
      'Genera una version minificada de distribución para la entrega a proyecto. Usar a través de "gulp dist"',
      distNormal
    );
    
    
    function distNormal(){
      return GULP.src(GLP.path.join(FOLDER.build)+'**/*')
      .pipe(GULP.dest(GLP.path.join(FOLDER.dist, FOLDER.thisDay, FOLDER.min)))
    }
  };
})();
