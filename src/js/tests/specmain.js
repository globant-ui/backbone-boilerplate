var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src/js',

  paths: {
    'backbone' : 'vendor/backbone/backbone',
    'jquery' : 'vendor/jquery/jquery',
    'underscore' : 'vendor/lodash/dist/lodash',
    'modernizr' : 'vendor/modernizr/modernizr',
    'templateregistry' : 'app/templates',
    'handlebars' : 'vendor/handlebars/handlebars'
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

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});

