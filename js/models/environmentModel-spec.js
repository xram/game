define(
    [
        'backbone',
        'environmentModel',
        'locationModel',
        'objectCollection',
        'objectModel'
    ],
    function(
        Backbone,
        EnvironmentModel,
        LocationModel,
        ObjectCollection,
        ObjectModel
    ) {
        'use strict';

        describe('`EnvironmentModel`', function() {
            it('should be defined', function() {
                expect(EnvironmentModel).toBeDefined();
            });

            it('should be a `Backbone` `Model`', function() {
                expect(Backbone.Model.prototype.isPrototypeOf(new EnvironmentModel())).toBe(true);
            });

            describe('`initialize` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('initialize')).toBe(true);
                    expect(EnvironmentModel.prototype.initialize).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should set the value of the model\'s `objects` property to an `ObjectCollection`', function() {
                        var environmentModel = new EnvironmentModel();

                        spyOn(environmentModel, 'set');
                        environmentModel.initialize();
                        expect(environmentModel.set).toHaveBeenCalledWith('objects', jasmine.any(ObjectCollection));
                    });
                });
            });

            describe('`getDepth` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('getDepth')).toBe(true);
                    expect(EnvironmentModel.prototype.getDepth).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `depth` attribute', function() {
                        var environmentModel = new EnvironmentModel(),
                            expectedValue = {};

                        spyOn(environmentModel, 'get').and.returnValue(expectedValue);
                        expect(environmentModel.getDepth()).toBe(expectedValue);
                        expect(environmentModel.get).toHaveBeenCalledWith('depth');
                        expect(environmentModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`getHeight` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('getHeight')).toBe(true);
                    expect(EnvironmentModel.prototype.getHeight).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `height` attribute', function() {
                        var environmentModel = new EnvironmentModel(),
                            expectedValue = {};

                        spyOn(environmentModel, 'get').and.returnValue(expectedValue);
                        expect(environmentModel.getHeight()).toBe(expectedValue);
                        expect(environmentModel.get).toHaveBeenCalledWith('height');
                        expect(environmentModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`getObjects` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('getObjects')).toBe(true);
                    expect(EnvironmentModel.prototype.getObjects).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `objects` attribute', function() {
                        var environmentModel = new EnvironmentModel(),
                            expectedValue = {};

                        spyOn(environmentModel, 'get').and.returnValue(expectedValue);
                        expect(environmentModel.getObjects()).toBe(expectedValue);
                        expect(environmentModel.get).toHaveBeenCalledWith('objects');
                        expect(environmentModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`getWidth` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('getWidth')).toBe(true);
                    expect(EnvironmentModel.prototype.getWidth).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `objects` attribute', function() {
                        var environmentModel = new EnvironmentModel(),
                            expectedValue = {};

                        spyOn(environmentModel, 'get').and.returnValue(expectedValue);
                        expect(environmentModel.getWidth()).toBe(expectedValue);
                        expect(environmentModel.get).toHaveBeenCalledWith('width');
                        expect(environmentModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`addObject` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('addObject')).toBe(true);
                    expect(EnvironmentModel.prototype.addObject).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should add the specified `ObjectModel` to the `Collection` returned by `getObjects`', function() {
                        var environmentModel = new EnvironmentModel(),
                            objectCollection = new ObjectCollection(),
                            objectModel = new ObjectModel();

                        spyOn(environmentModel, 'getObjects').and.returnValue(objectCollection);
                        spyOn(objectCollection, 'add');
                        environmentModel.addObject(objectModel);
                        expect(objectCollection.add).toHaveBeenCalledWith(objectModel);
                    });
                });
            });

            describe('`getRandomLocation` function', function() {
                it('should exist', function() {
                    expect(EnvironmentModel.prototype.hasOwnProperty('getRandomLocation')).toBe(true);
                    expect(EnvironmentModel.prototype.getRandomLocation).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return an `LocationModel`', function() {
                        expect(new EnvironmentModel().getRandomLocation()).toEqual(jasmine.any(LocationModel));
                    });

                    describe('`LocationModel` attributes', function() {
                        var environmentModel;

                        beforeEach(function() {
                            environmentModel = new EnvironmentModel();
                            spyOn(LocationModel.prototype, 'initialize');
                        });

                        it('should set the `x` attribute on the `LocationModel`', function() {
                            var randomValue = 0.07065934175625443,
                                width = 79;

                            spyOn(Math, 'random').and.returnValue(randomValue);
                            spyOn(environmentModel, 'getWidth').and.returnValue(width);
                            environmentModel.getRandomLocation();
                            expect(LocationModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "x": Math.floor(randomValue * width) }));
                        });

                        it('should return an object with an `y` property', function() {
                            var height = 29,
                                randomValue = 0.8240891979075968;

                            spyOn(Math, 'random').and.returnValue(randomValue);
                            spyOn(environmentModel, 'getHeight').and.returnValue(height);
                            environmentModel.getRandomLocation();
                            expect(LocationModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "y": Math.floor(randomValue * height) }));
                        });

                        it('should return an object with an `z` property', function() {
                            var depth = 89,
                                randomValue = 0.6452588171232492;

                            spyOn(Math, 'random').and.returnValue(randomValue);
                            spyOn(environmentModel, 'getDepth').and.returnValue(depth);
                            environmentModel.getRandomLocation();
                            expect(LocationModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "z": Math.floor(randomValue * depth) }));
                        });
                    });
                });
            });
        });
    }
);
