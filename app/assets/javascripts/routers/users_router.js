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

	new :function(){
		view = new Blog.Views.NewUsers();
		$('#container').html(view.render());

	},

	login :function(){
		view = new Blog.Views.Login();
		$('#container').html(view.render());

	},

	dashboard : function(){

		var view  = new Blog.Views.Dashboards();
		$('#container').html(view.render());

	},

	users : function(){

		var view  = new Blog.Views.AllUsers();
		$('#container').html(view.render());

	}



});
