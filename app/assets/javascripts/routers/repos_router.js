Bbprac.Routers.Repos = Backbone.Router.extend({
  routes: {
    '': 'index',
    'repos/:id': 'show'
  },

  initialize: function() {
    this.repos = new Bbprac.Collections.Repos();
  },

  index: function() {
    new Bbprac.Views.ReposIndex({collection: this.repos, el: $('#container')});
    this.repos.fetch({reset: true});
  },

  show: function(id) {
    this.commits = new Bbprac.Collections.Commits({id: id});
    new Bbprac.Views.Description({collection: this.commits, el: $('#container')});
    this.commits.fetch({reset: true});
  }
});
