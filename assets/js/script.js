$(document).on('shiny:inputchanged', function(event) {
    if (event.name === 'slider') {
        var sliderPos = event.target.value;
        // Update the width of the foreground image
        $('.foreground-img').css('width', `${sliderPos - 0.5}%`)
    }
    else { 
    }
});


var sliderBinding = new Shiny.InputBinding();
$.extend(sliderBinding, {
  find: function(scope) {
    return $(scope).find(".slider");
  },
  getValue: function(el) {
    return parseInt($(el).text());
  },
  setValue: function(el, value) {
    $(el).text(value);
  },
  subscribe: function(el, callback) {
    $(el).on("change.sliderBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".sliderBinding");
  }
});

// var foregroundBinding = new Shiny.InputBinding();
// $.extend(foregroundBinding, {
//   find: function(scope) {
//     return $(scope).find(".foreground-img");
//   },
//   getId: function(el) {
//     return parseInt($(el).text());
//   },

//   renderValue: function(el, data) {
//     $(el).on("change.foregroundBinding", function(e) {
//       callback();
//     });
//   },
//   unsubscribe: function(el) {
//     $(el).off(".foreground-img");
//   }
// });

Shiny.inputBindings.register(sliderBinding);
// Shiny.outputBindings.register(foregroundBinding);