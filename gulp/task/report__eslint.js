/*---------------------------------------------
 * ESLINT CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Generate report for validate our code.  
 */


(function(){
  'use strict';
  
  module.exports = function(GULP, GLP, FOLDER, gCommon){
    GULP.task(
      'report:eslint',
      'Genera un report con los Errors / Warnings de nuestro desarrollo  en JS. El report se genera en esta ruta: ' +GLP.path.join(FOLDER.reports, FOLDER.lint)+'report-result.html',
      reportEslint
    );
    
    function reportEslint() {
      GULP.src(GLP.path.join(FOLDER.src, FOLDER.js) + '**/*.js')
          .pipe(GLP.eslint(gCommon.eslint.configFile))
          .pipe(GLP.eslint.format(GLP.eslintHtmlReporter, function(results){
            GLP.fs.writeFileSync(GLP.path.join(FOLDER.reports, FOLDER.lint) + 'report-result.html', results);
          }))
    }
  }
})();
