/*---------------------------------------------
 * POSTCSS:PISTOREM CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Generate hack for older browser with measures in rem 
 */


(function(){
  'use strict';

  module.exports = function(GULP, FOLDER, GLP){
    GULP.task(
      'postcss:pixtorem',
      'Añade un hack para las medidas en rem de nuestros css para hacerlos compatibles con navegadores antiguos',
      postcssPixtorem
    );

    function postcssPixtorem(){
      GULP.src(GLP.path.join(FOLDER.build, FOLDER.css)+ '*.css')
      .pipe(GLP.pixrem())
      .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css) + 'postcss/'))
    }
  }
})();
