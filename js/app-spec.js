define(
    [
        'app',
        'gameStateModel',
        'marionette'
    ],
    function(
        App,
        GameStateModel,
        Marionette
    ) {
        describe('`App`', function() {
            it('should be defined', function() {
                expect(App).toBeDefined();
            });

            it('should be a `Marionette` `Application`', function() {
                expect(Marionette.Application.prototype.isPrototypeOf(new App)).toBe(true);
            });

            describe('`initialize` function', function() {
                it('should exist', function() {
                    expect(App.prototype.hasOwnProperty('initialize')).toBe(true);
                    expect(App.prototype.initialize).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    it('should invoke `initializeGameState`', function() {
                        var app = new App();

                        spyOn(app, 'initializeGameState');
                        app.initialize();
                        expect(app.initializeGameState).toHaveBeenCalled();
                    });
                });
            });

            describe('`initializeGameState` function', function() {
                it('should exist', function() {
                    expect(App.prototype.hasOwnProperty('initializeGameState')).toBe(true);
                    expect(App.prototype.initializeGameState).toEqual(jasmine.any(Function));
                });

                describe('when invoked', function() {
                    var app;

                    beforeEach(function() {
                        app = new App();
                    });

                    it('should set `app._gameStateModsel` to a new instance of `GameStateModel`', function() {
                        app.initializeGameState();
                        expect(app._gameStateModel).toEqual(jasmine.any(GameStateModel));
                    });

                    it('should specifiy the `environmentSize` property of the `GameStateModel`', function() {
                        spyOn(GameStateModel.prototype, 'initialize');
                        app.initializeGameState();
                        expect(GameStateModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "environmentSize": jasmine.any(Number) }));
                    });

                    it('should specify the `planetCount` property of the `GameStateModel`', function() {
                        spyOn(GameStateModel.prototype, 'initialize');
                        app.initializeGameState();
                        expect(GameStateModel.prototype.initialize).toHaveBeenCalledWith(jasmine.objectContaining({ "planetCount": jasmine.any(Number) }));
                    });
                });
            });
        });
    }
);
