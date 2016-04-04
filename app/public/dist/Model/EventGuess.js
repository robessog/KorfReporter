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
                constructor(team, player, nr, eventType) {
                    this.eventType = eventType;
                    this.teamName = team;
                    this.playerName = player;
                    this.playerNumber = nr;
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
