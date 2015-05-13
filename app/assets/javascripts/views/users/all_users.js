Blog.Views.AllUsers = Backbone.View.extend({

  template: JST['users/all'],
  el : "#container",
  render: function(){
  	var users = new Blog.Collections.Users();
	  var that=this;
  	users.fetch({
  		success: function(users){
  			that.$el.html(that.template({users : users.models}));

  		}
  	});
  	

  }


});
