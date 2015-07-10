define(
    [
        'backbone',
        'locationModel',
        'objectCollection'
    ],
    function(
        Backbone,
        LocationModel,
        ObjectCollection
    ) {
        'use strict';

        var EnvironmentModel;

        EnvironmentModel = Backbone.Model.extend({
            "initialize": function() {
                this.set('objects', new ObjectCollection());
            },

            "addObject": function(objectModel) {
                this.getObjects().add(objectModel);
            },

            "getDepth": function() {
                return this.get('depth');
            },

            "getHeight": function() {
                return this.get('height');
            },

            "getObjects": function() {
                return this.get('objects');
            },

            "getRandomLocation": function() {
                return new LocationModel({
                    "x": Math.floor(Math.random() * this.getWidth()),
                    "y": Math.floor(Math.random() * this.getHeight()),
                    "z": Math.floor(Math.random() * this.getDepth())
                });
            },

            "getWidth": function() {
                return this.get('width');
            }
        });

        return EnvironmentModel;
    }
);
