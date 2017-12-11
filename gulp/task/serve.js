/*---------------------------------------------
 * SERVE CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Run localhost project
 */


(function() {
  'use strict';

  module.exports = function(GULP, GLP, gServer) {

    GULP.task(
      'serve',
      'Levanta un server en localhost:' + gServer.port + ', starPath: ' + gServer.startPath,
      serve
    );
    
    function serve() {
      GLP.browserSync.init(gServer);
    }
  };
})();
