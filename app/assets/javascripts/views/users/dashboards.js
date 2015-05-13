Blog.Views.Dashboards = Backbone.View.extend({

  template: JST['users/dashboard'],
  el : "#container",
  render: function(){
  	this.$el.html(this.template());
  },

  events: {

    'click #signout': 'logoutUser'

  },

  logoutUser : function(ev){
  	debugger
  	var user = new Blog.Models.Sessions({id:bloggetcookie('api_key')});
  	
  	user.destroy({
  		success: function(){
  			blogdeletecookie('api_key');
  			console.log("session destroyed");
  		}
  	});
  	return false

  }




});
