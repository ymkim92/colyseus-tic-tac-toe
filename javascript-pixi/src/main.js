import * as PIXI from 'pixi.js'
import Application from './Application';
import TitleScreen from './screens/TitleScreen'

// Pre-load all assets before starting the Application.
var loader = new PIXI.loaders.Loader();

//
// ATTENTION: We use "require()" here because ParcelJS takes care of it.
//            This is not the case if you're using other bundler such as Webpack, etc.
//
loader.add('logo', require('./images/logo.png'))
loader.add('background', require('./images/background.jpg'));
loader.add('colyseus', require('./images/colyseus.png'));
loader.add('clock-icon', require('./images/clock-icon.png'));
loader.add('board', require('./images/board.png'));

loader.on('complete', () => {
  var loading = document.querySelector('.loading');
  document.body.removeChild(loading);

  var app = new Application()
  app.gotoScene (TitleScreen)
  app.update()
})

loader.load();
