//==========================================
//      FILE GULP CONFIG
//==========================================

const ROOT = './';
const SRC = 'src/';
const TEMPLATES = 'templates/';
const BUILD = 'build/';
const SCSS = 'scss/';
const CSS = 'css/';
const SCRIPTS = 'scripts/';
const FONTS = 'fonts/';
const ASSETS = 'assets/';
const MEDIA = 'media/';
const IMG = 'img/';


const CONFIG = {
  path: {
    root: ROOT,
    templates: ROOT + SRC + TEMPLATES,
    styles: ROOT + SRC + SCSS,
    assets: {
      root: ROOT + ASSETS,
      media: ROOT + ASSETS + MEDIA,
      fonts: ROOT + ASSETS + FONTS,
      img: ROOT + ASSETS + IMG
    },
    build: {
      root: ROOT + BUILD,
      css: ROOT + BUILD + CSS,
      scripts: ROOT + BUILD + SCRIPTS,
      fonts: ROOT + BUILD + CSS + FONTS,
      assets: {
        root: ROOT + ASSETS,
        media: ROOT + ASSETS + MEDIA,
        fonts: ROOT + ASSETS + FONTS,
        img: ROOT + ASSETS + IMG
      },
    },
  },
  pug: {
    inheritance: {
      basedir: SRC + TEMPLATES,
      skip: 'node_modules',
    },
    options: {
      pretty: true
    },
    namecache: 'cacheTemplate',
    folderViews: 'views',
    rename: {
      dirname: '',
      basename: '',
      extname: '.html'
    }
  },
  styles: {
    fileMain: 'front-modules.scss',
    options: {
      outputStyle: 'extend'
    },
    namecache: 'cacheStyles'
  },
  browserSync: {
    server: {
        baseDir: [
            ROOT + BUILD
        ],
        directory: true
    },
    // PORT DEV
    port: 5000,
    //proxy: "localhost:3000",
    ui: {
      // PORT CONFIG BROWSERSYNC
      port: 5001
    }
  },
  debug: {
    pug: true,
    styles: true
  }
};

export default CONFIG;
