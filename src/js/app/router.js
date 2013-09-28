define(
  [
    'backbone'
  ],
  function(Backbone) {

    var Router = Backbone.Router.extend({

      routes: {
        '*path': 'handleDefaultRoute'
      },

      initialize: function() {
        Backbone.history.start();
      },

      handleDefaultRoute: function(path) {
        console.log('Handle default route');
      }

    });

    return Router;
  }
);
