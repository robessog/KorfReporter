/// <reference path="./../typings/jspmImports/aurelia-router.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            class App {
                configureRouter(config, router) {
                    config.title = 'KorfReporter';
                    config.map([
                        //   { route: ['', 'Home'], name: 'home', modeuleId: './home', nav: true, title: 'Home' },
                        { route: ['About'], name: 'about', moduleId: './about', nav: true, title: 'About' },
                        { route: ['', 'MatchReporting'], name: 'matchEvent', moduleId: './MatchEvent/MatchEvent', nav: true, title: 'Match Reporting' }
                    ]);
                    this.router = router;
                }
            }
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=app.js.map
