// Imports
import notifier from 'node-notifier';
import chalk from 'chalk';
import through2 from 'through2';
import match from 'gulp-match';
import ternaryStream from 'ternary-stream';


//==========================================
//      UTILS CONDITIONAL
//==========================================
// Conditional function that returns a callback

export function conditional(condition, trueChild, falseChild, minimatchOptions) {

  if (!trueChild) {
    throw new Error('Util: conditional: action is required');
  }

  if (typeof condition === 'boolean') {
    // no need to evaluate the condition for each file
    // other benefit is it never loads the other stream
    return condition ? trueChild : (falseChild || through2.obj());
  }

  function classifier(file) {
    return !!match(file, condition, minimatchOptions);
  }

  return ternaryStream(classifier, trueChild, falseChild);
}


//==========================================
//      UTILS ERROR COMPILE
//==========================================

// CHALK; https://github.com/chalk/chalk
// NOTIFIER: TODO: Incluir link de la libreria de ejemplo

// Show balloon when there is an error
export function errorCompile(error) {
  const err = error ? error : 'NO ERROR';
  notifier.notify({
    title: err.name,
    message: `Plugin: ${err.plugin} \n ${err.message}`
  }, () => {
    // TODO: Definir los colores de como lo vamos a usar.

    // Show plugin failed
    console.error(chalk.red.redBright('Failed: '.padEnd(10) + ':'), chalk.white.bold(err.plugin));
    switch (err.plugin) {
      // Specific error for gulp-static-handlebars plugin
      case 'gulp-static-handlebars':
        console.log(chalk.red.bold('Message: '.padEnd(10) + ':'), chalk.white.bold(err.message));
        break;

      // Specific error for gulp-sass plugin
      case 'gulp-sass':
        console.error(chalk.red.bold('File: '.padEnd(10) + ':'), chalk.white.bold(err.relativePath));
        console.error(chalk.red.bold('Message: '.padEnd(10) + ':'), chalk.white.bold(err.messageOriginal));
        break;

      default:
        console.error('ERROR: ', err);
    }
  })
}


//==========================================
//      UTILS DATE
//==========================================

// Return a string with the current day formatted 'YYYYMMDD':

export function currentDate() {
  const current = new Date();
  return current.getFullYear() + ('0' + (current.getMonth() + 1)).slice(-2) + ('0' + current.getDate()).slice(-2) + '/';
}
