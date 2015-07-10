require.config({
    "paths": {
        "app": "/js/app",
        "appSpec": "/js/app-spec",
        "backbone": "/js/libs/backbone",
        "environmentModel": "/js/models/environmentModel",
        "environmentModelSpec": "/js/models/environmentModel-spec",
        "gameStateModel": "/js/models/gameStateModel",
        "gameStateModelSpec": "/js/models/gameStateModel-spec",
        "jquery": "/js/libs/jquery",
        "locationModel": "/js/models/locationModel",
        "locationModelSpec": "/js/models/locationModel-spec",
        "marionette": "/js/libs/backbone.marionette.min",
        "objectCollection": "/js/collections/objectCollection",
        "objectCollectionSpec": "/js/collections/objectCollection-spec",
        "objectModel": "/js/models/objectModel",
        "objectModelSpec": "/js/models/objectModel-spec",
        "planetModel": "/js/models/planetModel",
        "planetModelSpec": "/js/models/planetModel-spec",
        "underscore": "/js/libs/underscore"
    }
});

require(
    [
        'appSpec',
        'environmentModelSpec',
        'gameStateModelSpec',
        'locationModelSpec',
        'objectCollectionSpec',
        'objectModelSpec',
        'planetModelSpec'
    ],
    function() {
        'use strict';

        jasmine.getEnv().execute();
    }
);
