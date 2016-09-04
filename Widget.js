var nodes = require('nunjucks/src/nodes');

module.exports = function Widget( source ){
  this.source = source;
  this.tags = ['widget'];

  this.parse = function( parser, nodes, lexer ){
    var callTok = parser.peekToken(), node;
    if(!parser.skipSymbol('widget')) {
      parser.fail('expected widget');
    }
    var expression = parser.parseExpression();
    var lit = new nodes.Literal( callTok.lineno, callTok.colno, 'main' );
    expression.name =  new nodes.LookupVal( callTok.lineno, callTok.colno, expression.name, lit );
    node = new nodes.Output( callTok.lineno, callTok.colno, [ expression ] );
    parser.advanceAfterBlockEnd(callTok.value);
    return node;
  };

  /* this.preprocess = function( src, name ){
    return src;
  }; */
}


