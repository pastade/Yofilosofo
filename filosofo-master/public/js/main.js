$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app = new frase.Views.App( $('body') );
	window.routers.base = new frase.Routers.Base();

	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind('connect', function() {
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	window.collections.articles = new frase.Collections.Articles();
	window.collections.articles.on('add', function(model) {
      // Console.log('se agrego una nueva frase', model.toJSON())
      var view = new frase.Views.Article({model:model});
      view.render();
      view.$el.prependTo('.posts');

	});

	var xhr = window.collections.articles.fetch();

	xhr.done(function(){
		Backbone.history.start({
			root :'/',
			pushState:true

		});
	});
});