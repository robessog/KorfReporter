System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventTypeTranslator;
    return {
        setters:[],
        execute: function() {
            class EventTypeTranslator {
                static getDisplayName(eventType) {
                    switch (eventType) {
                        case 5:
                            return 'Long';
                        case 4:
                            return 'Medium';
                        case 0:
                            return 'Penalty';
                        case 13:
                            return 'First half started';
                        default:
                            return '???? unkown event type ????';
                    }
                }
            }
            exports_1("EventTypeTranslator", EventTypeTranslator);
        }
    }
});

//# sourceMappingURL=EventTypeTranslator.js.map
