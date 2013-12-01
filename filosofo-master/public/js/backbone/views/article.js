frase.Views.Article = Backbone.View.extend({
	events:{
        "click .acciones .votos .gusta" : "upvote",
        "click" : "navigate"
	},
	tagName: "article",
	className:"post",
	initialize : function(){
		var self = this;

		this.model.on('change', function(model) {
			self.render();
		});

		window.routers.base.on('route:root', function(){
			self.$el.css('display', '');
		});
		window.routers.base.on('route:articleSingle', function(){
			if(window.app.article === self.model.get('id') ) {

			} else {
				self.$el.hide();
			}
		});

		// this.template = _.template( $('#article-template').html() );
		this.template = swig.compile( $('#article-template').html() );
	},
	navigate : function(){
		Backbone.history.navigate('/frase/' + this.model.get('id'), {trigger:true} );
	},
	upvote : function(e){
		e.preventDefault();
		e.stopPropagation();
		var votes = parseInt( this.model.get('votes'), 10);

		this.model.set('votes', ++votes);
		this.model.save();

	},
	render : function (){
		var data = this.model.toJSON();

		var html = this.template(data);

        this.$el.html( html );
	}

});
