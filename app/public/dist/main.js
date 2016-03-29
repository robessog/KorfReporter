/// <reference path="./../typings/jspmImports/aurelia-framework.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start().then(() => aurelia.setRoot('dist/app', document.body));
    }
    exports_1("configure", configure);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=main.js.map
