frase.Routers.Base = Backbone.Router.extend({
	routes : {
		'' : 'root',
		'article/:id' : 'articleSingle'
	},
	root : function () {
		console.log('Estamos en el root de la aplicación');

		window.app.state = "root";
		window.app.article = null;

	},
	articleSingle : function (id){
		console.log('estamos en el primer pensamienro');

		window.app.state = "articleSingle";
		window.app.article = id;
	}

});