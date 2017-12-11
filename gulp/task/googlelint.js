/*---------------------------------------------
 * GOOGLELINT CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Check file js ang generate optimize version
 */

 (function (){
   'use strict';

   module.exports = function(GULP, GLP){
     GULP.src(
      'googlelint',
      'BETA -  Minifica y comprueba el código JS. Genera un fichero optimizado',
      googlelint
    );

     function googlelint(){
       return GULP.src('./src/js/**.*.js')
         .pipe(GLP.clousureCompiler({
           compilerPath:
					'./config/closure-compiler/closure-compiler.jar',
           fileName: 'dfront-libs-min.js'
         }))
				.pipe(GULP.dest('./build/js/'))
     }
   }
 })();
