global.__dirname = global.__dirname || process.env.PWD;
var env = require('nunjucks').configure(__dirname);
require("nunjucks-widgets")( env, 'myWidgetsDir' );
var out = env.render( 'page.html' );
console.log( out );

