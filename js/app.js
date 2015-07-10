define(
    [
        'gameStateModel',
        'marionette'
    ],
    function(
        GameStateModel,
        Marionette
    ) {
        'use strict';

        var App;

        App = Marionette.Application.extend({
            "initialize": function() {
                this.initializeGameState();
            },

            "initializeGameState": function() {
                this._gameStateModel = new GameStateModel({
                    "environmentSize": 100,
                    "planetCount": 10
                });
            }
        });

        return App;
    }
);
