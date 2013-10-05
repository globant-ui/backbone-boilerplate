// Karma configuration
// Generated on Sun Sept 29 2013 13:04:40

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'src/js/vendor/jquery/jquery.js', included: false },
      { pattern: 'src/js/vendor/requirejs/require.js', included: false },
      { pattern: 'src/js/vendor/lodash/dist/lodash.js', included: false },
      { pattern: 'src/js/vendor/backbone/backbone.js', included: false },
      { pattern: 'src/js/vendor/modernizr/modernizr.js', included: false },
      { pattern: 'src/js/vendor/handlebars/handlebars.js', included: false },
      { pattern: 'src/js/app/**/*.js', included: false },

      { pattern: 'src/js/tests/specs/**/*.spec.js', included: false},

      'src/js/tests/specmain.js'
    ],


    // list of files to exclude
    exclude: [
      'src/js/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'src/js/app/**/*.js': ['coverage']
    },


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
}

