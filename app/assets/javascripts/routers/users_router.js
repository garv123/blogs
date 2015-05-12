Blog.Routers.Users = Backbone.Router.extend({

	routes: {

		'': 'index',
		'users/:id': 'show'

	},

	index :function(){

		view = new Blog.Views.UsersIndex();
		$('#container').html(view.render());

	},

	show :function(id){

		alert('User id'+id);
	}



});
