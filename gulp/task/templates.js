/*---------------------------------------------
 * TEMPLATE CONFIGURATION TASK
 *----------------------------------------------*/

 /*
 * Compile template .jade
 */



(function() {
  'use strict';

  module.exports = function(GULP, FOLDER, GLP, UTILS, gTemplates) {
    GULP.task(
      'templates',
      'Compila archivos .jade',
      templates
    ); 
    
    function templates() {
      return GULP.src(GLP.path.join(FOLDER.src, FOLDER.templates) + '**/*.' + gTemplates.extension)
				.pipe(GLP.plumber({
  errorHandler: function(err){
    return UTILS.errorCompile(GLP, err, this)
  }
}))
				.pipe(GLP.changed(FOLDER.build, {extension: 'html'}))
				.pipe(GLP.cached(gTemplates.nameCache))
				.pipe(GLP.if(gTemplates.extension === 'jade', GLP.jadeInheritance(gTemplates.inheritanceOpt), GLP.pugInheritance(gTemplates.inheritanceOpt)))
				.pipe(GLP.filter(function(file) {
  if(file.relative.search(gTemplates.filterTemplates) !== -1)
    return file.relative;
}))
				// .pipe(GLP.debug())
				.pipe(GLP.if(gTemplates.extension === 'jade', GLP.jade(gTemplates.templatesOpt), GLP.pug(gTemplates.templatesOpt)))
				.pipe(GLP.flatten())
				.pipe(GULP.dest(FOLDER.build))
				.pipe(GLP.browserSync.stream());
    }
  };
})();
