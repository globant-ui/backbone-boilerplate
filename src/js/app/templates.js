define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["joke.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Welcome to Globant-UI Backbone Boilerplate</h1>\n<img src=\"img/globant-ui.png\" alt=\"Globant UI logo\" />\n<p>Did you know?</p>\n<article>\n  ";
  if (stack1 = helpers.joke) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.joke; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</article>";
  return buffer;
  });

return this["JST"];

});