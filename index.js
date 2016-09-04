
var Widget = require('./Widget');
var ImportWidget = require('./ImportWidget');

module.exports = function registerExtension( env, sourceDir ){
  env.addExtension( 'Widget', new Widget( sourceDir ));
  env.addExtension( 'ImportWidget', new ImportWidget( sourceDir ));
}
