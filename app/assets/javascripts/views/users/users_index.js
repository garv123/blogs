Blog.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],
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
