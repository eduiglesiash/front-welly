// ==============================================
//      GULP'S FILE CONFIGURATION
// ==============================================
//	CONTENT THIS FILE:
//      # DEFAULT
//		  # CACHE TEMPLATES
//      # CLEAN
//        * CLEAN:CSS
//        * CLEAN:FONT
//        * CLEAN:SCRIPT
//        * CLEAN:TEMPLATE
//        * CLEAN:ASSETS
//      # CONSOLE
//        * CONSOLE:GLP
//      # COPY
//        * COPY:IMG
//        * COPY:MEDIA
//        * COPY:FAVICON
//        * COPY:FONTS
//      # CSS
//      # DIST
//        * DIST:MIN
//        * DIST:NORMAL
//		  # JS
//      # POST CSS
//      # REPORT: ESLINT
//      # SCSS
//      # SERVER AND WATCH
//		  # TEMPLATES
//      # W3C
//  
//  TASK GROUP
//      # DEVELOP
//      # DIST
//      # CLEAN:ALL
//      # COPY:ALL
//      # BUILD

'use strict';

// ==============================================
//      IMPORT LIB'S
// ==============================================
import gulp from 'gulp';


// ==============================================
//      IMPORT TASKS
// ==============================================
import {templates} from "./gulp/task/templates";
import {styles} from "./gulp/task/scss";
import {serverAndWatch} from "./gulp/task/server-and-watch";
import {
  cleanAssets,
  cleanFonts,
  cleanScript,
  cleanStyles,
  cleanTemplates
} from "./gulp/task/clean";
import {
  copyFavicon,
  copyFonts,
  copyImg,
  copyMedia
} from "./gulp/task/copy";


// ==============================================
//      TASK # TEMPLATES
// ==============================================
gulp.task('templates', templates);


// ==============================================
//      TASK # SCSS
// ==============================================
gulp.task('styles', styles);


// ==============================================
//      TASK # SERVER AND WATCH
// ==============================================
gulp.task('serve', serverAndWatch);


// ==============================================
//      TASKS # CLEAN
// ==============================================
gulp.task('clean:templates', cleanTemplates);
gulp.task('clean:scripts', cleanScript);
gulp.task('clean:fonts', cleanFonts);
gulp.task('clean:styles', cleanStyles);
gulp.task('clean:assets', cleanAssets);


// ==============================================
//      TASKS # COPY
// ==============================================
gulp.task('copy:media', copyMedia);
gulp.task('copy:fonts', copyFonts);
gulp.task('copy:img', copyImg);
gulp.task('copy:favicon', copyFavicon);


// (function() {
// 	'use strict';
// /*-------------------------------------------------
// * LIB'S REQUIRE
// *-------------------------------------------------*/
// 	const GULP	= require('gulp-help')(require('gulp'));
// 	const FOLDER 	= require('./gulp/paths/folder.js');
//   const UTILS = require('./gulp/utils/utils.js');
// 	const GLP 	= require('gulp-load-plugins')({
// 		scope: ['devDependencies'],
// 		pattern: '*'
// 	});
//
//
//
//
//
//
// /*-------------------------------------------------
// *       DECLARATE CONFIG VAR
// *------------------------------------------------*/
// 	var
//     gCommon,
//     gTemplates,
//     gScss,
//     gJs,
//     gServer,
//     gOverrides,
//     gCssmin,
//     gW3cHtml,
//     gWcag;
//
//     /*
//       Declaracion del objeto COMMON. En este objeto se incluirá todas aquellas opciones que puedan ser communes en varias tareas.
//     */
//       gCommon = {
//         nameCache: 'html',
//         eslint: {
//           configFile: './config/lint/.eslintrc'
//         },
//         proxy: 'http://10.0.8.102:8080'
//       };
//
//
//
//
//
//
// /*-------------------------------------------------
// *       IMPORT AND CONFIG TASK
// *------------------------------------------------*/
//     /*----------------------------------
// 	  * TASK # CACHETEMPLATES
// 	  ----------------------------------*/
//       require('./gulp/task/cache__templates')(GULP, GLP, FOLDER, gCommon);
//
//
//
//
//     /*----------------------------------
// 	  * TASK # CLEAN
// 	  ----------------------------------*/
//       require('./gulp/task/clean__css')(GULP, GLP, FOLDER);
//       require('./gulp/task/clean__fonts')(GULP, GLP, FOLDER);
//       require('./gulp/task/clean__script')(GULP, GLP, FOLDER);
//       require('./gulp/task/clean__templates')(GULP, GLP, FOLDER);
//       require('./gulp/task/clean__assets')(GULP, GLP, FOLDER);
//
//
//
//
//     /*----------------------------------
// 	  * TASK # CONSOLE
// 	  ----------------------------------*/
//       require('./gulp/task/console__glp')(GULP, GLP);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # COPY
// 	  ----------------------------------*/
//   	  require('./gulp/task/copy__favicon')(GULP, GLP, FOLDER);
//       require('./gulp/task/copy__fonts')(GULP, GLP, FOLDER);
//       require('./gulp/task/copy__img')(GULP, GLP, FOLDER);
//       require('./gulp/task/copy__media')(GULP, GLP, FOLDER);
//
//
//
//
//     /*----------------------------------
// 	  * TASK # CSS
// 	  ----------------------------------*/
//       gCssmin = {
//         compatibility: 'ie9'
//       };
//       require('./gulp/task/css__min')(GULP, FOLDER, GLP, gCssmin);
//
//
//
//
//     /*----------------------------------
// 	  * TASK # DIST
// 	  ----------------------------------*/
//       require('./gulp/task/dist__normal')(GULP, GLP, FOLDER);
//       require('./gulp/task/dist__min')(GULP, GLP, FOLDER);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # JS
// 	  ----------------------------------*/
//       gJs = {
//         fileDev   :   'front-script-dev.js',
//         fileDist  :   'front-script.js',
//         eslint: {
//           configFile: './config/lint/.eslintrc',
//           format: './node_modules/eslint-path-formatter'
//         }
//       };
//       require('./gulp/task/js')(GULP, FOLDER, GLP, UTILS, gJs, gCommon);
//       require('./gulp/task/js__min')(GULP, FOLDER, GLP);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # POSTCSS
// 	  ----------------------------------*/
// 	    require('./gulp/task/postcss__pixtorem')(GULP, FOLDER, GLP);
//
//
//
//
//     /*----------------------------------
// 	  * TASK # REPORT:ESLINT
// 	  ----------------------------------*/
//       require('./gulp/task/report__eslint')(GULP, GLP, FOLDER);
//
//
//
//     /*----------------------------------
// 	  * TASK # SCSS
// 	  ----------------------------------*/
//       gScss ={
//         optScss: {
//           outputStyle: 'extend'
//         },
//         autoprefix: {
//           browsers  : ['last 2 versions', 'ie 8'],
//           cascade   : false
//         },
//         pixrem:{
//           atrules: true,
//           browsers: 'ie <= 8'
//         }
//       };
//
//       require('./gulp/task/scss')(GULP, FOLDER, GLP, UTILS, gScss);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # SERVE
// 	  ----------------------------------*/
//       gServer = {
//         server:'./',
//         startPath: '/build/',
//         directory: true,
//         reloadOnRestart: false,
//         reloadDelay: 2000,
//         port: 7000
//       };
//       require('./gulp/task/serve')(GULP, GLP, gServer);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # TEMPLATES
// 	  -----------------------------------*/
//       gTemplates = {
//         extension       : 'jade',
//         nameCache       : 'tmpHTML',
//         inheritanceOpt  : {
//           basedir: 'src/templates/'
//         },
//         filterTemplates : 'views',
//         templatesOpt    : {
//           pretty: true
//         }
//       };
//       require('./gulp/task/templates')(GULP, FOLDER, GLP, UTILS, gTemplates);
//
//
//
//
//
//     /*----------------------------------
// 	  * TASK # W3C
// 	  ----------------------------------*/
//       require('./gulp/task/w3c__css')(GULP, GLP, FOLDER, UTILS, gCommon);
//
//
//
//
//       gW3cHtml = {
//         remotePath:['http://localhost:7000/build/'],
//         remoteFiles:["index.html"],
//         generateCheckstyleReport: 'reports/html/validation/validation.xml',
//         doctype: 'HTML5',
//         charset: 'utf-8',
//         proxy: "http://10.0.8.102:8080",
//         generateReport: true,
//         errorHTMLRootDir: "reports/html/validation/",
//         errorTemplate: "config/w3c/html/template_validation_w3c.html",
//         relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.',
//           'Element title must not be empty.']
//       };
//       require('./gulp/task/w3c__html')(GULP, GLP, FOLDER, UTILS, gW3cHtml);
//
//
//
//
//
//       gWcag = {
//         accessibilityLevel: 'WCAG2AA',
//         maxBuffer: '1024*1024',
//         force: true,
//         verbose: false,
//         reportLevels: {
//             notice: true,
//             warning: true,
//             error: true
//         },
//         reportLocation: 'reports/html/accessibility/',
//         forceUrls: true,
//         brower:true,
//         urls: [
//             'http://localhost:7000/build/index.html'
//         ]
//       };
//       require('./gulp/task/wcag')(GULP, GLP, FOLDER, UTILS, gWcag);
//
//
//
//
//
//
//
// 	  /*----------------------------------
// 	  * TASK # WATCH
// 	  ----------------------------------*/
//       require('./gulp/task/watch')(GULP, GLP, FOLDER);
//
//
//
//
// /*-------------------------------------------------
// * TASK GROUP
// *--------------------------------------------------*/
//
//       /*-------------------------------------------------
//       * TASK # DEFAULT
//       *--------------------------------------------------*/
//         GULP.task('default',['help']);
//
//
//
//
//       /*-------------------------------------------------
//       * TASK # DEVELOP
//       *--------------------------------------------------*/
//         GULP.task(
//           'develop',
//           '---' +
//           '\n\t1.- Compila todo el desarrollo para que se genera por primera vez la carpeta de GULP.' +
//           '\n\t2.- Levanta el entorno de desarrollo',
//           develop
//         );
//
//         function develop(){
//           GLP.runSequence(
//             'clean:templates',
//             'clean:scripts',
//             'clean:css',
//             'clean:fonts',
//             'clean:assets',
//             'copy:img',
//             'copy:media',
//             'copy:favicon',
//             'copy:fonts',
//             'templates',
//             'scss',
//             'js',
//             'cacheTemplates',
//             'serve',
//             'watch'
//           );
//         }
//
//
//
//       /*-------------------------------------------------
//       * TASK # DIST
//       *--------------------------------------------------*/
//         GULP.task(
//           'dist',
//           'Genera las versiones de distribución para entregar a cliente. Version Normal || Verion Minificada',
//           dist
//         );
//         function dist(){
//           GLP.runSequence(
//             'clean:templates',
//             'clean:scripts',
//             'clean:css',
//             'clean:fonts',
//             'clean:assets',
//             'copy:img',
//             'copy:media',
//             'copy:favicon',
//             'copy:fonts',
//             'templates',
//             'scss',
//             'js',
//             'dist:normal',
//             'js:min',
//             'css:min',
//             'dist:min'
//           );
//         }
//
//       /*-------------------------------------------------
//       * TASK # CLEAN:ALL
//       *--------------------------------------------------*/
//         GULP.task(
//           'clean:all',
//           'Ejecuta todas las tareas clean',
//           cleanAll
//         );
//
//         function cleanAll(){
//           GLP.runSequence(
//             'clean:templates',
//             'clean:scripts',
//             'clean:css',
//             'clean:fonts',
//             'clean:assets'
//           );
//         }
//
//
//       /*-------------------------------------------------
//       * TASK # COPY:ALL
//       *--------------------------------------------------*/
//         GULP.task(
//           'copy:all',
//           'Ejecuta todas las tareas de copy',
//           copyAll
//         );
//
//         function copyAll(){
//           GLP.runSequence(
//             'copy:img',
//             'copy:media',
//             'copy:favicon',
//             'copy:fonts'
//           );
//         }
// })();
