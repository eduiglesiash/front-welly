/*---------------------------------------------
 * CACHETEMPLATES CONFIGURATION TASK
 ----------------------------------------------*/

/*
 * Create cached for jade templates
 */

(function(){
  'use strict';

  module.exports = function(GULP, GLP, FOLDER, gCommon){
    GULP.task(
      'cacheTemplates',
      'Crea una cache de todos los archivos *.jade',
      cacheTemplates
    );
    
    function cacheTemplates(){
      return 	GULP.src([GLP.path.join(FOLDER.src, FOLDER.templates)+'**/*.jade'])
				.pipe(GLP.cached(gCommon.nameCache))
    }
  };
})();
