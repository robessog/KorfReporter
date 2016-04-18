System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GamePlayer;
    return {
        setters:[],
        execute: function() {
            class GamePlayer {
                constructor(firstName, lastName, jerseyNumber) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.jerseyNumber = jerseyNumber;
                    this.isCaptain = false;
                }
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
            }
            exports_1("GamePlayer", GamePlayer);
        }
    }
});

//# sourceMappingURL=GamePlayer.js.map
