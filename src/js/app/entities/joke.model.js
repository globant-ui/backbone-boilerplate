define(
  [
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var JokeModel = Backbone.Model.extend({

      defaults: {
        id: 0,
        joke: 'No jokes for the moment :(',
        categories: []
      },

      url: function() {
        return 'http://api.icndb.com/jokes/' + getRandomInt(1, 584);
      },

      parse: function(response) {
        return response.value;
      },

      fetch: function(options) {
        options = options || {};
        options.dataType = options.dataType || 'jsonp';
        return Backbone.Model.prototype.fetch.apply(this, [options]);
      }

    });

    return JokeModel;

  }
);