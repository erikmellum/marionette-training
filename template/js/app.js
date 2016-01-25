var MyApp = Marionette.Application.extend({
  Foo: function() {
    console.log("Watch out for the foo's"); 
  }; 
  
  initialize:before: function() {
    console.log("Starting initialize");
  }

  initialize:after: function() {
    console.log("Finished initialize");  
  }

  start: function() {
    Backbone.history.start();
  }
});
