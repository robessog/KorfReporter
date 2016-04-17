System.register(['./../Model/MatchTeam', './../Model/EventGuess', 'socket.io-client'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchTeam_1, EventGuess_1, Socket;
    var MatchEvent;
    return {
        setters:[
            function (MatchTeam_1_1) {
                MatchTeam_1 = MatchTeam_1_1;
            },
            function (EventGuess_1_1) {
                EventGuess_1 = EventGuess_1_1;
            },
            function (Socket_1) {
                Socket = Socket_1;
            }],
        execute: function() {
            class MatchEvent {
                constructor() {
                    this.heading = 'Welcome to Aurelia!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.message = 'Hello from my királyságos aurelia!';
                    this.team1 = new MatchTeam_1.MatchTeam('SZAC');
                    this.team2 = new MatchTeam_1.MatchTeam('Szentendre');
                }
                get guesses() {
                    return [
                        new EventGuess_1.EventGuess('SZAC', 'Dörfi György', 6, 5),
                        new EventGuess_1.EventGuess('SZAC', 'Dörfi György', 6, 0)
                    ];
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
                activate() {
                    this.socket = Socket.connect();
                    this.socket.on('connect', (data) => {
                        this.socket.emit('join', 'Hello Workld from client :)');
                    });
                }
            }
            exports_1("MatchEvent", MatchEvent);
        }
    }
});

//# sourceMappingURL=matchEvent.js.map
