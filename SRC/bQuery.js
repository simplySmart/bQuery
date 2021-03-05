(function() {

  window.$ = function(id) {

    // About object is returned if there is no 'id' parameter

    var about = {

      Author: "Ujjawal Dwivedi",

      Version: 1.0,

      Created: "3 March 2021",

      Updated: "3 March 2021"

    };

    if (id) {

      // Avoid clobbering the window scope:

      // return a new $ object if we're in the wrong scope

      if (window === this) {

        return new $(id);

      }

      // We're in the correct object scope:

      // Init our element object and return the object

      this.e = document.querySelector(id);

      return this;

    } else {

      // No 'id' parameter was given, return the 'about' object

      return about;

    }};

  /* $ Prototype Functions

============================*/

  class fn {

    addVal(newval) {

      this.e.innerText += "\t"+newval;

      return this;

    }

    addHtml(val) {

      this.e.innerHTML += "\t" + val;

      return this;

    }

    bgcolor(color) {

      this.e.style.background = color;

      return this;

    }

    class(method, name) {

      this.e.classList[method](name); //[] this replace '.' so that a variable value can be used to write the property name.

      //so this is same as 'this.e.classList.method("value") '

      //Eg. this.e.classList.add('bye'); So it will add class bye

      return this;

    }

    css(val) {

      this.e.style.cssText += val;

      return this;

    }

    hide() {

      this.e.style.display = 'none';

      return this;

    }

    html(newval) {

      this.e.innerHTML = newval;

      return this;

    }

    on(event, fun) {

      this.e.addEventListener(event, fun);

      return this;

    }

    show() {

      this.e.style.display = 'inherit';

      return this;

    }

    size(height, width) {

      this.e.style.height = height + 'px';

      this.e.style.width = width + 'px';

      return this;

    }

    toggle() {

      if (this.e.style.display !== 'none') {

        this.e.style.display = 'none';

      } else {

        this.e.style.display = '';

      }

      return this;

    }

    val(newval) {

      this.e.innerText = "\t"+newval;

      return this;

    }

  }

  $.prototype = new fn();

  //we can chain upto 2 or 3 elements and no property should repeat simultaneously

}());
