define(
    [
        'backbone',
        'locationModel'
    ],
    function(
        Backbone,
        LocationModel
    ) {
        'use strict';

        describe('`LocationModel`', function() {
            it('should be defined', function() {
                expect(LocationModel).toBeDefined();
            });

            it('should be a `Backbone` `Model`', function() {
                expect(Backbone.Model.prototype.isPrototypeOf(new LocationModel())).toBe(true);
            });
        });
    }
);
