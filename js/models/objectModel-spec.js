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

        describe('`ObjectModel`', function() {
            it('should be defined', function() {
                expect(ObjectModel).toBeDefined();
            });

            it('should be a `Backbone` `Model`', function() {
                expect(Backbone.Model.prototype.isPrototypeOf(new ObjectModel())).toBe(true);
            });
        });
    }
);
