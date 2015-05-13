window.Blog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Blog.router= new Blog.Routers.Users();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Blog.initialize();
});
