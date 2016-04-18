System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventAbbreviationResolver;
    return {
        setters:[],
        execute: function() {
            class EventAbbreviationResolver {
                static getEventType(abbreviation) {
                    return EventAbbreviationResolver.abbrvMap[abbreviation];
                }
            }
            EventAbbreviationResolver.abbrvMap = {
                'l': 5,
                'm': 4
            };
            exports_1("EventAbbreviationResolver", EventAbbreviationResolver);
        }
    }
});

//# sourceMappingURL=EventAbbreviationResolver.js.map
