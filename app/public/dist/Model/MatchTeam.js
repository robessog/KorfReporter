System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchTeam;
    return {
        setters:[],
        execute: function() {
            class MatchTeam {
                constructor(name) {
                    this.score = 0;
                    this.players = [];
                    this.name = name;
                }
            }
            exports_1("MatchTeam", MatchTeam);
        }
    }
});

//# sourceMappingURL=MatchTeam.js.map
