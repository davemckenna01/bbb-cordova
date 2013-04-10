define(['backbone'], function(Backbone) {
    var Views,
        TestModel;

    TestModel = Backbone.Model.extend({
        url: 'testapi.json',

        defaults: {
            foo: 'turkey'
        }
    });

    Views = {};

    Views.First = Backbone.View.extend({
        template: 'first',

        events: {
            'click .get-json': 'loadJSON'
        },

        initialize: function() {
            this.model.on('change', this.render, this);
        },

        serialize: function() {
            return this.model.toJSON();
        },

        loadJSON: function() {
            console.log('load json');
            this.model.fetch();
        }
    });
    Views.Second = Backbone.View.extend({
        template: 'second'
    });
    Views.Third = Backbone.View.extend({
        template: 'third'
    });

    return {Views: Views,
            Model: TestModel};
});
