module.exports = function(grunt) {
  'use strict';

  var PATH_ASSETS = 'src';
  var PATH_DEPLOY_ASSETS = 'public';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean build directory
    clean: [PATH_DEPLOY_ASSETS],

    copy: {
      main: {
        expand: true,
        cwd: PATH_ASSETS,
        src: '**',
        dest: PATH_DEPLOY_ASSETS
      }
    },

    requirejs: {
      compile: {
        options: {
          appDir: PATH_ASSETS,
          dir: PATH_DEPLOY_ASSETS,
          baseUrl: './js',
          //configuration file
          mainConfigFile: PATH_ASSETS + '/js/main.js',
          // optimize javascript files with uglifyjs
          optimize: 'uglify',
          // define dependencies
          modules: [
            {
              name: 'main'
            }
          ]
        }
      }
    },

    // js linting options
    jshint: {
      all: ['Gruntfile.js', PATH_ASSETS + '/js/main.js', PATH_ASSETS + '/js/app/**/*.js',
      '!' + PATH_ASSETS + '/js/app/templates.js']
    },

    concat: {
      css: {
        src: [PATH_ASSETS + '/css/*.css'],
        dest: PATH_DEPLOY_ASSETS + '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: PATH_DEPLOY_ASSETS + '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css',
        dest: PATH_DEPLOY_ASSETS + '/css/<%= pkg.name %>.min-<%= pkg.version %>.css'
      }
    },

    csslint: {
      lax: {
        rules: {
          'box-sizing': false,
          'adjoining-classes': false
        },
        src: [PATH_ASSETS + '/css/*.css', '!' + PATH_ASSETS + '/css/normalize.css']
      }
    },

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: PATH_ASSETS + '/img',
            src: ['**/*.png'],
            dest: PATH_DEPLOY_ASSETS + '/img',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: PATH_ASSETS + '/img',
            src: ['**/*.jpg'],
            dest: PATH_DEPLOY_ASSETS + '/img',
            ext: '.jpg'
          }
        ]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // default build task
  grunt.registerTask('default', 'build:dev');

  //build tasks
  grunt.registerTask('build:prod', ['clean', 'jshint:all', 'csslint:lax', 'requirejs', 'concat', 'cssmin', 'imagemin']);
  grunt.registerTask('build:dev', ['clean', 'copy', 'jshint:all', 'csslint:lax', 'concat', 'cssmin']);
};
