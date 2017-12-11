/*********************************************
 * GULP's paths configuration
 *********************************************/

(function(){
    'use strict';
    module.exports	=	projectPath();

    function projectPath(){
        var d			= 	new Date();
        var date 		=	d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '/';
        return 	{
            src         : 	'src/',
            dist        : 	'dist/',
            normal      : 	'normal/',
            min         : 	'min/',
            css         :	  'css/',
            scss        :	  'scss/',
            templates   :	  'templates/',
            views       :	  'views/',
            js          :	  'js/',
            build       :	  'build/',
            gulp        :	  'gulp/',
            task        :	  'task/',
            comp        :	  'components/',
            dev         :	  'dev/',
            util        :	  'utilities/',
            hbs         : 	'handlebars/',
            reports     :   'reports/',
            lint        :   'lint/',
            assets      :   'assets/',
            fonts       :   'fonts/',
            libs        :   'libs/',
            html        :   'html/',
            w3c         :   'w3c/',
            img         :   'img/',
            media       :   'media/',
            thisDay     :	  date
        };
    }
})();
