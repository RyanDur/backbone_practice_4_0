window.Bbprac = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Bbprac.Routers.Repos();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  Bbprac.initialize();
});
