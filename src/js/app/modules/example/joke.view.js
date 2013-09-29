define(
  [
    'backbone',
    '../../entities/joke.model',
    'templateregistry'
  ],
  function(Backbone, JokeModel, JST) {
    'use strict';

    var JokeView = Backbone.View.extend({

      el: 'section',

      template: 'joke.hbs',

      initialize: function() {
        this.model = new JokeModel();
        this.tplFunction = JST[this.template];
        this.model.fetch();
        this.listenTo(this.model, 'change', this.render);
      },

      render: function() {
        this.$el.html(this.tplFunction(this.model.toJSON()));
      }

    });

    return JokeView;
  }
);
