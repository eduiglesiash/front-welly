/*-------------------------------------------------
 * GULP's FILE CONFIGURATION
 --------------------------------------------------*/
//	CONTENT THIS FILE:
//      # DEFAULT
//      # BOWERFILES
//		  # CACHETEMPLATES
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
//      # POSTCSS
//      # REPORT:ESLINT
//      # SCSS
//      # SERVE
//		  # TEMPLATES
//		  # WATCH
//      # W3C
//  
//  TASK GROUP
//      # DEVELOP
//      # DIST
//      # CLEAN:ALL
//      # COPY:ALL
//      # BUILD



(function() {
	'use strict';
/*-------------------------------------------------
* LIB'S REQUIRE
*-------------------------------------------------*/
	const GULP	= require('gulp-help')(require('gulp'));
	const FOLDER 	= require('./gulp/paths/folder.js');
  const UTILS = require('./gulp/utils/utils.js');
	const GLP 	= require('gulp-load-plugins')({
		scope: ['devDependencies'],
		pattern: '*'
	});






/*-------------------------------------------------
*       DECLARATE CONFIG VAR
*------------------------------------------------*/
	var 
    gCommon,
    gTemplates,
    gScss,
    gJs,
    gServer,
    gOverrides,
    gBowerfiles,
    gCssmin,
    gW3cHtml,
    gWcag;

    /*
      Declaracion del objeto COMMON. En este objeto se incluirá todas aquellas opciones que puedan ser communes en varias tareas. 
    */
      gCommon = {
        nameCache: 'html',
        eslint: {
          configFile: './config/lint/.eslintrc'
        },
        proxy: 'http://10.0.8.102:8080'
      };






/*-------------------------------------------------
*       IMPORT AND CONFIG TASK
*------------------------------------------------*/
    /*----------------------------------
	  * TASK # BOWERFILES
	  ----------------------------------*/
      gOverrides = {
        "overrides": {
          "es5-shim": {
            main: [
              './es5-shim.min.js',
              './es5-sham.min.js'
            ]
          },
          "html5shiv": {
            main: [
              './dist/html5shiv.min.js'
            ]
          },
          "respond": {
            main: [
              './dest/respond.min.js'
            ]
          },
          "jquery": {
            main: [
              './dist/jquery.min.js'
            ]
          },
          "jquery-ui": {
            main: [
              './jquery-ui.min.js',
              './themes/base/tabs.css',
              './themes/base/selectmenu.css'
            ]
          },
          "slick-carousel":{
            main:[
              './slick/slick.min.js',
              './slick/ajax-loader.gif',
              './slick/fonts/*.*',
              './slick/slick.css'
            ]
          },
          "malihu-custom-scrollbar-plugin":{
            main:[
              './jquery.mCustomScrollbar.js',
              './jquery.mCustomScrollbar.css'
            ]
          }
        }
      };
      
      gBowerfiles = {
        concatJS : false,
        uglifyJS : false,
        debugJS  : false,
        fileMinJs: 'dependencies.min.js',
        concatCSS : false,
        uglifyCSS : false,
        debugCSS  : false,
        fileMinCSS: 'libs-css-min.css',
        debugFONT  : false,
        debugResource  : false
      };
      require('./gulp/task/bower__files')(GULP, GLP, FOLDER, gOverrides, gBowerfiles);




    /*----------------------------------
	  * TASK # CACHETEMPLATES
	  ----------------------------------*/
      require('./gulp/task/cache__templates')(GULP, GLP, FOLDER, gCommon);




    /*----------------------------------
	  * TASK # CLEAN
	  ----------------------------------*/
      require('./gulp/task/clean__css')(GULP, GLP, FOLDER);
      require('./gulp/task/clean__fonts')(GULP, GLP, FOLDER);
      require('./gulp/task/clean__script')(GULP, GLP, FOLDER);
      require('./gulp/task/clean__templates')(GULP, GLP, FOLDER);
      require('./gulp/task/clean__assets')(GULP, GLP, FOLDER);



      
    /*----------------------------------
	  * TASK # CONSOLE
	  ----------------------------------*/
      require('./gulp/task/console__glp')(GULP, GLP);





    /*----------------------------------
	  * TASK # COPY
	  ----------------------------------*/
  	  require('./gulp/task/copy__favicon')(GULP, GLP, FOLDER);
      require('./gulp/task/copy__fonts')(GULP, GLP, FOLDER);
      require('./gulp/task/copy__img')(GULP, GLP, FOLDER);
      require('./gulp/task/copy__media')(GULP, GLP, FOLDER);




    /*----------------------------------
	  * TASK # CSS
	  ----------------------------------*/
      gCssmin = {
        compatibility: 'ie9'
      };
      require('./gulp/task/css__min')(GULP, FOLDER, GLP, gCssmin);




    /*----------------------------------
	  * TASK # DIST
	  ----------------------------------*/
      require('./gulp/task/dist__normal')(GULP, GLP, FOLDER);
      require('./gulp/task/dist__min')(GULP, GLP, FOLDER);





    /*----------------------------------
	  * TASK # JS
	  ----------------------------------*/
      gJs = {
        fileDev   :   'front-script-dev.js',
        fileDist  :   'front-script.js',
        eslint: {
          configFile: './config/lint/.eslintrc',
          format: './node_modules/eslint-path-formatter'
        }
      };
      require('./gulp/task/js')(GULP, FOLDER, GLP, UTILS, gJs, gCommon);
      require('./gulp/task/js__min')(GULP, FOLDER, GLP);





    /*----------------------------------
	  * TASK # POSTCSS 
	  ----------------------------------*/
	    require('./gulp/task/postcss__pixtorem')(GULP, FOLDER, GLP);




    /*----------------------------------
	  * TASK # REPORT:ESLINT
	  ----------------------------------*/
      require('./gulp/task/report__eslint')(GULP, GLP, FOLDER);



    /*----------------------------------
	  * TASK # SCSS
	  ----------------------------------*/
      gScss ={
        optScss: {
          outputStyle: 'extend'
        },
        autoprefix: {
          browsers  : ['last 2 versions', 'ie 8'],
          cascade   : false
        },
        pixrem:{
          atrules: true,
          browsers: 'ie <= 8'
        }
      };
      
      require('./gulp/task/scss')(GULP, FOLDER, GLP, UTILS, gScss);





    /*----------------------------------
	  * TASK # SERVE
	  ----------------------------------*/
      gServer = {
        server:'./',
        startPath: '/build/',
        directory: true,
        reloadOnRestart: false,
        reloadDelay: 2000,
        port: 7000
      };
      require('./gulp/task/serve')(GULP, GLP, gServer);





    /*----------------------------------
	  * TASK # TEMPLATES
	  -----------------------------------*/
      gTemplates = {
        extension       : 'jade',
        nameCache       : 'tmpHTML',
        inheritanceOpt  : {
          basedir: 'src/templates/'
        },
        filterTemplates : 'views',
        templatesOpt    : {
          pretty: true
        }
      };
      require('./gulp/task/templates')(GULP, FOLDER, GLP, UTILS, gTemplates);





    /*----------------------------------
	  * TASK # W3C
	  ----------------------------------*/
      require('./gulp/task/w3c__css')(GULP, GLP, FOLDER, UTILS, gCommon);




      gW3cHtml = {
        remotePath:['http://localhost:7000/build/'],
        remoteFiles:["index.html"],
        generateCheckstyleReport: 'reports/html/validation/validation.xml',
        doctype: 'HTML5',
        charset: 'utf-8',
        proxy: "http://10.0.8.102:8080",
        generateReport: true,
        errorHTMLRootDir: "reports/html/validation/",
        errorTemplate: "config/w3c/html/template_validation_w3c.html",
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.',
          'Element title must not be empty.']
      };
      require('./gulp/task/w3c__html')(GULP, GLP, FOLDER, UTILS, gW3cHtml);



      
       
      gWcag = {
        accessibilityLevel: 'WCAG2AA',
        maxBuffer: '1024*1024',
        force: true,
        verbose: false,
        reportLevels: {
            notice: true,
            warning: true,
            error: true
        },
        reportLocation: 'reports/html/accessibility/',
        forceUrls: true,
        brower:true,
        urls: [
            'http://localhost:7000/build/index.html'
        ]
      };
      require('./gulp/task/wcag')(GULP, GLP, FOLDER, UTILS, gWcag);






	  
	  /*----------------------------------
	  * TASK # WATCH
	  ----------------------------------*/
      require('./gulp/task/watch')(GULP, GLP, FOLDER);




/*-------------------------------------------------
* TASK GROUP
*--------------------------------------------------*/

      /*-------------------------------------------------
      * TASK # DEFAULT
      *--------------------------------------------------*/
        GULP.task('default',['help']);




      /*-------------------------------------------------
      * TASK # DEVELOP
      *--------------------------------------------------*/
        GULP.task(
          'develop',
          '---' +
          '\n\t1.- Compila todo el desarrollo para que se genera por primera vez la carpeta de GULP.' +
          '\n\t2.- Levanta el entorno de desarrollo',
          develop
        );

        function develop(){
          GLP.runSequence(
            'clean:templates',
            'clean:scripts',
            'clean:css',
            'clean:fonts',
            'clean:assets',
            'copy:img',
            'copy:media',
            'copy:favicon',
            'copy:fonts',
            'bowerfiles',
            'templates',
            'scss',
            'js',
            'cacheTemplates',
            'serve',
            'watch'
          );
        }



      /*-------------------------------------------------
      * TASK # DIST
      *--------------------------------------------------*/
        GULP.task(
          'dist',
          'Genera las versiones de distribución para entregar a cliente. Version Normal || Verion Minificada',
          dist
        );
        function dist(){
          GLP.runSequence(
            'clean:templates',
            'clean:scripts',
            'clean:css',
            'clean:fonts',
            'clean:assets',
            'copy:img',
            'copy:media',
            'copy:favicon',
            'copy:fonts',
            'bowerfiles',
            'templates',
            'scss',
            'js',
            'dist:normal',
            'js:min',
            'css:min',
            'dist:min'
          );
        }

      /*-------------------------------------------------
      * TASK # CLEAN:ALL
      *--------------------------------------------------*/
        GULP.task(
          'clean:all',
          'Ejecuta todas las tareas clean',
          cleanAll
        );

        function cleanAll(){
          GLP.runSequence(
            'clean:templates',
            'clean:scripts',
            'clean:css',
            'clean:fonts',
            'clean:assets'
          );
        }
    

      /*-------------------------------------------------
      * TASK # COPY:ALL
      *--------------------------------------------------*/
        GULP.task(
          'copy:all',
          'Ejecuta todas las tareas de copy',
          copyAll
        );

        function copyAll(){
          GLP.runSequence(
            'copy:img',
            'copy:media',
            'copy:favicon',
            'copy:fonts'
          );
        }
})();
