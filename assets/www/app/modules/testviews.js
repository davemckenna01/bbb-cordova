define(['backbone'], function(Backbone) {

    var Views = {};

    Views.First = Backbone.View.extend({
        template: 'first'
    });
    Views.Second = Backbone.View.extend({
        template: 'second'
    });
    Views.Third = Backbone.View.extend({
        template: 'third'
    });

    return Views;
});
