frase.Collections.Articles = Backbone.Collection.extend({
    model: frase.Models.Article,
    url: '/articles/',
    name: 'articles'
});