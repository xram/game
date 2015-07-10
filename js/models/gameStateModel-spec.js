define(
    [
        'backbone',
        'environmentModel',
        'gameStateModel'
    ],
    function(
        Backbone,
        EnvironmentModel,
        GameStateModel
    ) {
        'use strict';

        describe('`GameStateModel`', function() {
            it('should be defined', function() {
                expect(GameStateModel).toBeDefined();
            });

            it('should be a `Backbone` `Model`', function() {
                expect(Backbone.Model.prototype.isPrototypeOf(new GameStateModel)).toBe(true);
            });

            describe('`initialize` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('initialize')).toBe(true);
                    expect(GameStateModel.prototype.initialize).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should invoke `initializeEnvironment`', function() {
                        var gameStateModel = new GameStateModel();

                        spyOn(gameStateModel, 'initializeEnvironment');
                        gameStateModel.initialize();
                        expect(gameStateModel.initializeEnvironment).toHaveBeenCalled();
                    });
                });
            });

            describe('`getEnvironmentModel` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('getEnvironmentModel')).toBe(true);
                    expect(GameStateModel.prototype.getEnvironmentModel).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `environment` attribute', function() {
                        var expectedValue = {},
                            gameStateModel = new GameStateModel();

                        spyOn(gameStateModel, 'get').and.returnValue(expectedValue);
                        expect(gameStateModel.getEnvironmentModel()).toBe(expectedValue);
                        expect(gameStateModel.get).toHaveBeenCalledWith('environment');
                        expect(gameStateModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`getEnvironmentSize` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('getEnvironmentSize')).toBe(true);
                    expect(GameStateModel.prototype.getEnvironmentSize).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `environmentSize` attribute', function() {
                        var expectedValue = {},
                            gameStateModel = new GameStateModel();

                        spyOn(gameStateModel, 'get').and.returnValue(expectedValue);
                        expect(gameStateModel.getEnvironmentSize()).toBe(expectedValue);
                        expect(gameStateModel.get).toHaveBeenCalledWith('environmentSize');
                        expect(gameStateModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`getPlanetCount` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('getPlanetCount')).toBe(true);
                    expect(GameStateModel.prototype.getPlanetCount).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should return the value of the model\'s `planetCount` attribute', function() {
                        var expectedValue = {},
                            gameStateModel = new GameStateModel();

                        spyOn(gameStateModel, 'get').and.returnValue(expectedValue);
                        expect(gameStateModel.getPlanetCount()).toBe(expectedValue);
                        expect(gameStateModel.get).toHaveBeenCalledWith('planetCount');
                        expect(gameStateModel.get.calls.count()).toBe(1);
                    });
                });
            });

            describe('`initializeEnvironment` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('initializeEnvironment')).toBe(true);
                    expect(GameStateModel.prototype.initializeEnvironment).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    var gameStateModel;

                    beforeEach(function() {
                        gameStateModel = new GameStateModel();
                    });

                    it('should set the `GameStateModel`\'s `environment` attribute to a new instance of `EnvironmentModel`', function() {
                        spyOn(gameStateModel, 'set');
                        gameStateModel.initializeEnvironment();
                        expect(gameStateModel.set).toHaveBeenCalledWith('environment', jasmine.any(EnvironmentModel));
                    });

                    it('should set the `EnvironmentModel`\'s `depth` attribute to the value returned from `getEnvironmentSize`', function() {
                        var environmentSize = 92;

                        spyOn(EnvironmentModel.prototype, 'initialize');
                        spyOn(gameStateModel, 'getEnvironmentSize').and.returnValue(environmentSize);
                        gameStateModel.initializeEnvironment();
                        expect(EnvironmentModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "depth": environmentSize }));
                    });

                    it('should set the `EnvironmentModel`\'s `height` attribute to the value returned from `getEnvironmentSize`', function() {
                        var environmentSize = 92;

                        spyOn(EnvironmentModel.prototype, 'initialize');
                        spyOn(gameStateModel, 'getEnvironmentSize').and.returnValue(environmentSize);
                        gameStateModel.initializeEnvironment();
                        expect(EnvironmentModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "height": environmentSize }));
                    });

                    it('should set the `EnvironmentModel`\'s `width` attribute to the value returned from `getEnvironmentSize`', function() {
                        var environmentSize = 92;

                        spyOn(EnvironmentModel.prototype, 'initialize');
                        spyOn(gameStateModel, 'getEnvironmentSize').and.returnValue(environmentSize);
                        gameStateModel.initializeEnvironment();
                        expect(EnvironmentModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "width": environmentSize }));
                    });

                    it('should invoke `addPlanets` passing in the value returned from `getEnvironmentModel` and the value returned from `getPlanetCount`', function() {
                        var environmentModel = new EnvironmentModel(),
                            gameStateModel = new GameStateModel(),
                            planetCount = 78;

                        spyOn(gameStateModel, 'getEnvironmentModel').and.returnValue(environmentModel);
                        spyOn(gameStateModel, 'getPlanetCount').and.returnValue(planetCount);
                        spyOn(gameStateModel, 'addPlanets');
                        gameStateModel.initializeEnvironment();
                        expect(gameStateModel.addPlanets).toHaveBeenCalledWith(environmentModel, planetCount);
                    });
                });
            });

            describe('`addPlanets` function', function() {
                it('should exist', function() {
                    expect(GameStateModel.prototype.hasOwnProperty('addPlanets')).toBe(true);
                    expect(GameStateModel.prototype.addPlanets).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should add the specified number of planets to the environment', function() {
                        var environmentModel = new EnvironmentModel(),
                            gameStateModel = new GameStateModel(),
                            planetCount = 81;

                        spyOn(environmentModel, 'addObject');
                        gameStateModel.addPlanets(environmentModel, planetCount);
                        expect(environmentModel.addObject.calls.count()).toBe(planetCount);
                    });
                });
            });
        });
    }
);
