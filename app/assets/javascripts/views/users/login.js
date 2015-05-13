Blog.Views.Login= Backbone.View.extend({

	template: JST['users/login'],
  	el : "#container",
  	render: function(){
		this.$el.html(this.template);
  	},

  	events: {

    'submit .form-login-user': 'loginUser'

  	},

  	loginUser: function(ev){
  		$.fn.serializeObject = function() {
    	var o = {};
   	 	var a = this.serializeArray();
   	 	$.each(a, function() {
     	 if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      	} else {
          o[this.name] = this.value || '';
      	}
      	});
    	return o;
    	};
    	var userDetails= $(ev.currentTarget).serializeObject();
    	console.log(userDetails);
    	var user = new Blog.Models.Sessions();

    	user.save(userDetails,{
      	success: function(user){
      		 var api_key = "api_key";
      		 debugger
      		 blogsetcookie(api_key,user['changed']['api_key'],1);
      		 var url= 'dashboard/'+user['changed']['api_key']; 
      		 Blog.router.navigate(url,{trigger:true});

      }
    });
    return false;


  		
  	}

});