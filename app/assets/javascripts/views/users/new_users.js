Blog.Views.NewUsers = Backbone.View.extend({

  template: JST['users/new'],
  el : "#container",
  render: function(){

    this.$el.html(this.template());

  },

  events: {

    'submit .form-new-user': 'saveUser'

  },

  saveUser : function(ev){

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
    var user = new Blog.Models.User();
    user.save(userDetails,{
      success: function(user){

        Blog.router.navigate('',{trigger:true});
      }
    });
    return false;


  }

});
