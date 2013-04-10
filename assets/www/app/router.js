define([
  'modules/test'
],

function(Test) {
  console.log('router.js');

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "first",
      "first.html": "first",
      "second.html": "second",
      "third.html": "third"
    },

    initialize: function() {
      this.layout = new Backbone.Layout({
        template: 'mainlayout',
      });


      $('body').append(this.layout.el);
    },

    first: function() {
      this.layout.insertViews({
        '#hook': new Test.Views.First({
          model: new Test.Model()
        })
      }).render();
    },

    second: function() {
      this.layout.insertViews({
        '#hook': new Test.Views.Second({
          model: new Test.Model()
        })
      }).render();
    },

    third: function() {
      this.layout.insertViews({
        '#hook': new Test.Views.Third({
          model: new Test.Model()
        })
      }).render();
    }

  });

  return Router;

});
