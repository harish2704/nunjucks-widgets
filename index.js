
var Widget = require('./Widget');
var ImportWidget = require('./ImportWidget');
var NjkApped = require('nunjucks-append');

module.exports = function registerExtension( env, sourceDir ){

  env.addExtension( 'Widget', new Widget( sourceDir ));
  env.addExtension( 'ImportWidget', new ImportWidget( sourceDir ));
  NjkApped.initialise( env );
}
