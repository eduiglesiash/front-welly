
 /*-------------------------------------------------
    #welly-frontend - fn-gulp
--------------------------------------------------*/

 module.exports = {
   errorCompile: function (GLP, err, vthis) {
     GLP.nodeNotifier.notify({
       'title': 'ERROR: ' + err.plugin + ' ha fallado ',
       'message': 'Yo que tu revisaría la consola ;( ' 
     });
     console.error(GLP.chalk.red(
       '\n' + err.message + '\n'
     ));
     vthis.emit('end');
   }
 };
