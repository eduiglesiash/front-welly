/*---------------------------------------------
 * SCSS CONFIGURATION TASK
 *----------------------------------------------*/

/*
 * Compile files *.scss of our dev
 */


(function(){
  'use strict';

  module.exports = function (GULP, FOLDER, GLP, UTILS, gScss){

    GULP.task(
      'scss',
      'Compila nuestro archivos SCSS. Compila en: ' + GLP.path.join(FOLDER.build, FOLDER.css),
      scss
    );

    function scss(){
      return	GULP.src(GLP.path.join(FOLDER.src, FOLDER.scss) + '*.scss')

        .pipe(GLP.plumber({
          errorHandler: function(err){
            return UTILS.errorCompile(GLP, err, this)
          }
        }))
        .pipe(GLP.sourcemaps.init())
				.pipe(GLP.sass(gScss.optScss))
        .pipe(GLP.sourcemaps.write())
				.pipe(GLP.autoprefixer(gScss.autoprefix))
        .pipe(GLP.groupCssMediaQueries())
        .pipe(GLP.pixrem(gScss.pixrem))
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css)))
				.pipe(GLP.browserSync.stream());
    }
  };
})();
