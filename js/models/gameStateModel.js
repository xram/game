define(
    [
        'backbone',
        'environmentModel'
    ],
    function(
        Backbone,
        EnvironmentModel
    ) {
        'use strict';

        var GameStateModel;

        GameStateModel = Backbone.Model.extend({
            "initialize": function() {
                this.initializeEnvironment();
            },

            "addPlanets": function(environment, count) {
                while (count--) {
                    environment.addObject();
                }
            },

            "getEnvironmentModel": function() {
                return this.get('environment');
            },

            "getEnvironmentSize": function() {
                return this.get('environmentSize');
            },

            "getPlanetCount": function() {
                return this.get('planetCount');
            },

            "initializeEnvironment": function() {
                var environmentModel = new EnvironmentModel({
                    "depth": this.getEnvironmentSize(),
                    "height": this.getEnvironmentSize(),
                    "width": this.getEnvironmentSize()
                });

                this.set('environment', environmentModel);

                this.addPlanets(this.getEnvironmentModel(), this.getPlanetCount());
            }
        });

        return GameStateModel;
    }
);
