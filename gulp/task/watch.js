/*---------------------------------------------
 * WATCH CONFIGURATION TASK
 *----------------------------------------------*/

 /*
 * Watchers for templates, scss and js.
 */

(function(){

  'use strict';

  module.exports = function(GULP, GLP, FOLDER){
    GULP.task(
      'watch',
      'Lanza el WATCH de: [templates, scss, js]',
      watch
    );
    
    
    function watch(){
      GULP.watch(GLP.path.join(FOLDER.src, FOLDER.templates)+'**/*.jade', ['templates']);
      GULP.watch(GLP.path.join(FOLDER.src, FOLDER.scss)+'**/*.scss', ['scss']).on('change', GLP.browserSync.reload);
      GULP.watch(GLP.path.join(FOLDER.src, FOLDER.js)+'**/*.js', ['js']);
    }
  };
})();
