var nodes = require('nunjucks/src/nodes');
var path = require('path');

module.exports = function ImportWidget( source ){
  this.source = source;
  this.tags = [ 'importWidget' ];

  this.parse = function( parser, nodes, lexer ){
    var tok = parser.peekToken(),
      node,
      widgetName, widgetAs;

    if(!parser.skipSymbol('importWidget')) {
      parser.fail('expected widget');
    }

    widgetName = parser.parseExpression();
    widgetAs = new nodes.Literal( tok.lineno, tok.colno, widgetName.value );
    widgetName.value = path.join( this.source, widgetName.value, 'main.html' );
    node = new nodes.Import( tok.lineno,  tok.colno, widgetName, widgetAs, true );

    parser.advanceAfterBlockEnd( tok.value );
    return node;
  };

}

