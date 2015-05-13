Blog.Routers.Users = Backbone.Router.extend({

	routes: {

		'': 'index',
		'users' :'users',
		'users/:id': 'show',
		'new': 'new',
		'login': 'login',
		'dashboard/:id': 'dashboard'

	},

	index :function(){

		view = new Blog.Views.UsersIndex();
		$('#container').html(view.render());

	},

	show :function(id){

		alert('User id'+id);
	},

	dashboard : function(){

		var view  = new Blog.Views.Dashboards();
		$('#container').html(view.render());

	}



});
