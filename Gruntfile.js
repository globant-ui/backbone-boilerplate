module.exports = function(grunt) {
  'use strict';

  var PATH_ASSETS = 'src';
  var PATH_ASSETS_JS = PATH_ASSETS + '/js';
  var PATH_ASSETS_CSS = PATH_ASSETS + '/css';
  var PATH_ASSETS_IMG = PATH_ASSETS + '/img';
  var PATH_DEPLOY_ASSETS = 'public';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [PATH_DEPLOY_ASSETS],

    bower: {
      install: {
        options: {
           copy: false,
           layout: 'byComponent',
           install: true
         }
      }
    },

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
          mainConfigFile: PATH_ASSETS_JS + '/main.js',
          optimize: 'uglify2',
          optimizeCss: 'none',
          modules: [
            {
              name: 'main'
            }
          ],
          skipDirOptimize: true
        }
      }
    },

    // js linting options
    jshint: {
      all: ['Gruntfile.js', PATH_ASSETS_JS + '/**/*.js',
        '!' + PATH_ASSETS_JS + '/vendor/**/*.js',
        '!' + PATH_ASSETS_JS + '/app/templates.js']
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'JST',
          amd: true,
          processName: function(filename) {
            var pieces = filename.split('/');
            return pieces[pieces.length - 1];
          }
        },
        files: {
          'src/js/app/templates.js': PATH_ASSETS_JS + '/**/*.hbs'
        }
      }
    },

    concat: {
      css: {
        src: ['src/vendor/normalize-css/normalize.css', PATH_ASSETS_CSS + '/*.css'],
        dest: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>-<%= pkg.version %>.concat.css',
        dest: PATH_DEPLOY_ASSETS +
          '/css/<%= pkg.name %>.min-<%= pkg.version %>.css'
      }
    },

    csslint: {
      lax: {
        rules: {
          'box-sizing': false,
          'adjoining-classes': false
        },
        src: [PATH_ASSETS_CSS + '/*.css', '!' + PATH_ASSETS_CSS + '/normalize.css']
      }
    },

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        dynamic: [
          {
            expand: true,
            cwd: PATH_ASSETS + '/img',
            src: ['**/*.png'],
            dest: PATH_DEPLOY_ASSETS + '/img'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        dynamic: [
          {
            expand: true,
            cwd: PATH_ASSETS + '/img',
            src: ['**/*.jpg'],
            dest: PATH_DEPLOY_ASSETS + '/img'
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
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', 'build:dev');

  grunt.registerTask('build:prod', ['clean', 'bower', 'jshint:all', 'handlebars',
     'csslint:lax', 'requirejs', 'concat', 'cssmin', 'imagemin']);

  grunt.registerTask('build:dev', ['clean', 'bower', 'jshint:all', 'handlebars',
     'csslint:lax', 'copy', 'concat', 'cssmin']);
};
