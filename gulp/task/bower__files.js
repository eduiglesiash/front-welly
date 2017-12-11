/*---------------------------------------------
 * BOWERFILES CONFIGURATION TASK
 *---------------------------------------------*/

/*
 * Copy files of bower_components and paste into folder build/js/libs/  
 */

(function(){
  'use strict';

  module.exports = function(GULP, GLP, FOLDER, gOverrides, gBowerfiles){
    GULP.task(
      'bowerfiles',
      'Copia las dependencias de bower.json a nuestra carpeta build',
      bowerfiles
    );

    function bowerfiles(){
      var filterJS = GLP.filter(
        ['**/*.js'], 
        {restore: true}
      );
      var filterCSS = GLP.filter(
        ['**/*.css'],
        {restore: true}
      );
      var filterFONT = GLP.filter(
        [
          '**/*.svg', 
          '**/*.eot', 
          '**/*.ttf', 
          '**/*.woff', 
          '**/*.woff2'
        ],
        {restore: true}
      );
      var filterResources = GLP.filter(
        [
          '**/*.gif', 
          '**/*.png', 
          '**/*.jpg'
        ],       
        {restore: true}
      );

      return 	GULP.src(GLP.mainBowerFiles(gOverrides))
				.pipe(filterJS)
        .pipe(GLP.if(gBowerfiles.debugJS, GLP.debug()))
        .pipe(GLP.if(gBowerfiles.concatJS, GLP.concat(gBowerfiles.fileMinJs)))
        .pipe(GLP.if(gBowerfiles.uglifyJS, GLP.uglify()))
				.pipe(GLP.flatten())
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.js, FOLDER.libs)))
        .pipe(filterJS.restore)

        .pipe(filterCSS)
        .pipe(GLP.if(gBowerfiles.concatCSS, GLP.concat(gBowerfiles.fileMinCSS)))
        .pipe(GLP.cleanCss())
        .pipe(GLP.if(gBowerfiles.debugCSS, GLP.debug()))
				.pipe(GLP.flatten())
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css, FOLDER.libs)))
        .pipe(filterCSS.restore)

        .pipe(filterFONT)
        .pipe(GLP.if(gBowerfiles.debugFONT, GLP.debug()))
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css, FOLDER.fonts)))
        .pipe(filterFONT.restore)

        .pipe(filterResources)
        .pipe(GLP.if(gBowerfiles.debugResource, GLP.debug()))
        .pipe(GULP.dest(GLP.path.join(FOLDER.build, FOLDER.css)))
        .pipe(filterResources.restore)
    }
  };
})();
