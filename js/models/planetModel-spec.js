define(
    [
        'objectModel',
        'planetModel'
    ],
    function(
        ObjectModel,
        PlanetModel
    ) {
        'use strict';

        describe('`PlanetModel`', function() {
            it('should be defined', function() {
                expect(PlanetModel).toBeDefined();
            });

            it('should be a `ObjectModel`', function() {
                expect(ObjectModel.prototype.isPrototypeOf(new PlanetModel())).toBe(true);
            });
        });
    }
);
