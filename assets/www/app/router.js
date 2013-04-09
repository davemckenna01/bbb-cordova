define([
  'modules/testviews'
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
        '#hook': new Test.First()
      }).render();
    },

    second: function() {
      this.layout.insertViews({
        '#hook': new Test.Second()
      }).render();
    },

    third: function() {
      this.layout.insertViews({
        '#hook': new Test.Third()
      }).render();
    }

  });

  return Router;

});
