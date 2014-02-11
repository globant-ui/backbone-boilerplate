require.config({

  paths: {
    'backbone' : '../vendor/backbone/backbone',
    'jquery' : '../vendor/jquery/jquery',
    'underscore' : '../vendor/lodash/dist/lodash',
    'modernizr' : '../vendor/modernizr/modernizr',
    'handlebars' : '../vendor/handlebars/handlebars',
    'templateregistry' : 'app/templates'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'modernizr': {
      exports: 'Modernizr'
    },

    'handlebars': {
      exports: 'Handlebars'
    }
  },

  waitSeconds: 30
});

require(
  [
    'app/router',
    'modernizr'
  ],
  function(Router) {
    'use strict';
    new Router();
  }
);
