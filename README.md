# nunjucks-widgets
A Mechanism for re-usable widgets using nunjucks


## Usage

### Install
```
npm i https://github.com/harish2704/nunjucks-widgets/archive/master.tar.gz
```

### Example



```
<!-- page.html -->
{% importWidget 'form' %}

{% widget form( 'Click Me', 'form-id') %}

{% output 'head' %}
  Content of main head
{% endoutput %}

```

```
<!-- myWidgetsDir/form/main.html -->

{% macro main( actionName, id, class="default" ) %}
  {% importWidget 'input' %}

  <form action="" method="get" id="{{id}}">
    {% widget input( 'email', 'Email', 'str-email' ) %}
    {% widget input( 'username', 'Email', 'str-username' ) %}

    <button type="submit" class="btn btn-{{class}}">{{actionName}}</button>
  </form>


  {% inject 'head' %}
  Injected from form
  {% endinject %}

  {% endmacro %}

```

```
<!-- myWidgetsDir/label/main.html -->

{% macro main( name, for ) %}
<label for="{{for}}" >{{ name }}</label>
  {% inject 'head' %}
  Injected from label
  {% endinject %}
{% endmacro %}


```

```
<!-- myWidgetsDir/input/main.html -->

{% macro main( name, label, id, class="input" ) %}
  {% importWidget 'label' %}

  <div class="form-group {{ class }}">
    {#  {% widget label( label, id ) %}  #}
    {{ label.main( label, id ) }}
    <input type="{{type}}" class="form-control" placeholder="{{label}}" id="{{id}}">
  </div>

  {% inject 'head' %}
  Injected from input
  {% endinject %}

{% endmacro %}

```

run.js
```javascript
// run.js

var env = require('nunjucks').configure(__dirname);
require("nunjucks-widgets")( env, './myWidgetsDir' );
var out = env.render( 'page.html' );
console.log( out );
```


## Credits
* [Michael Robinson](https://github.com/faceleg) for [ nunjucks-append ](https://github.com/faceleg/nunjucks-append) module
