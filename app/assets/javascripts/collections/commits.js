Bbprac.Collections.Commits = Backbone.Collection.extend({
  url: function() {
    return '/api/repos/' + this.id
  },

  model: Bbprac.Models.Commit,

  initialize: function(options) {
    this.id = options.id;
  }
});
