require.config({
  paths: {
    'backbone' : 'vendor/backbone/backbone',
    'jquery' : 'vendor/jquery/jquery',
    'underscore' : 'vendor/lodash/dist/lodash',
    'modernizr' : 'vendor/modernizr/modernizr',
    'templateregistry' : 'app/templates',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'modernizr': {
      exports: 'Modernizr'
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
