window.Blog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Blog.Routers.Users();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Blog.initialize();
});
