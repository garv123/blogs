Blog.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],
  el : "#container",
  render: function(){
  	this.$el.html(this.template());

  }


});
