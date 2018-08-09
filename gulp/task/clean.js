// ==============================================
//      TASKS CLEAN
// ==============================================

// IMPORT LIBS
import del from 'del';


// IMPORT CONFIG
import config from '../gulp.config';

/*===================================================*/
// Delete file with *.html of the folder build
export function cleanTemplates () {
  return del([ config.path.build.root + '*.html'])
}



// Delete folder scripts
export function cleanScript () {
  return del([ config.path.build.scripts ])
}



// Delete folder fonts
export function cleanFonts () {
  return del([ config.path.build.fonts ])
}


// Delete folder CSS
export function cleanStyles() {
  return del([ config.path.build.styles + '**/*.css' ])
}


// Delete folder assets
export function cleanAssets() {
  return del ([ config.path.build.assets.root ])
}
