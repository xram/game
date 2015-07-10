define(
    [
        'backbone',
        'objectModel'
    ],
    function(
        Backbone,
        ObjectModel
    ) {
        'use strict';

        var ObjectCollection;

        ObjectCollection = Backbone.Collection.extend({
            "model": ObjectModel
        });

        return ObjectCollection;
    }
);
