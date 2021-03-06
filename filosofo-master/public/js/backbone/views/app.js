frase.Views.App = Backbone.View.extend({
	events:{
         "click .publicar" : "showForm",
         "submit form" : "createPost",
         "click .logo" : "navigateHome"
	},
	initialize : function ($el) {
		this.$el = $el;
	},
    navigateHome : function(){
        Backbone.history.navigate('/', {trigger:true});
    },
    showForm : function(){
    	this.$el.find('form').show();
    },
    createPost : function (e) {
    	e.preventDefault();

    	var titulo = $('input[name=titulo]').val();
        var autor = $('input[name=autor]').val();

        var data = {
        	"title" : titulo,
        	"user" : autor,
        	"image" : "/img/img4.jpg",
        	"votes" : 0
        };

        var model = new frase.Models.Article(data);

        model.save();
    }
});