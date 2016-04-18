System.register(['./../SHARED_SRC/Domain/EventTypeTranslator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventTypeTranslator_1;
    var EventGuess;
    return {
        setters:[
            function (EventTypeTranslator_1_1) {
                EventTypeTranslator_1 = EventTypeTranslator_1_1;
            }],
        execute: function() {
            class EventGuess {
                constructor(player, eventType, team) {
                    this.player = player;
                    this.eventType = eventType;
                    this.team = team;
                }
                get eventTypeDisplayName() {
                    return EventTypeTranslator_1.EventTypeTranslator.getDisplayName(this.eventType);
                }
            }
            exports_1("EventGuess", EventGuess);
        }
    }
});

//# sourceMappingURL=EventGuess.js.map
