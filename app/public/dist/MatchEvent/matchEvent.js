System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchEvent;
    return {
        setters:[],
        execute: function() {
            class MatchEvent {
                constructor() {
                    this.heading = 'Welcome to Aurelia!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.message = 'Hello from my királyságos aurelia!';
                }
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
                submit() {
                    alert(`Welcome, ${this.fullName}!`);
                }
                changeMessage() {
                    this.message = 'changed 5336';
                }
            }
            exports_1("MatchEvent", MatchEvent);
        }
    }
});

//# sourceMappingURL=matchEvent.js.map
