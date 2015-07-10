define(
    [
        'backbone',
        'objectCollection',
        'objectModel'
    ],
    function(
        Backbone,
        ObjectCollection,
        ObjectModel
    ) {
        'use strict';

        describe('`ObjectCollection`', function() {
            it('should be defined', function() {
                expect(ObjectCollection).toBeDefined();
            });

            it('should be a `Backbone` `Collection`', function() {
                expect(Backbone.Collection.prototype.isPrototypeOf(new ObjectCollection())).toBe(true);
            });

            it('should have a `model` property with a value of `ObjectModel`', function() {
                expect(ObjectCollection.prototype.model).toBe(ObjectModel);
            });
        });
    }
);
