System.register(['./../Model/MatchTeam', './../Model/EventGuess', './../Model/EventAbbreviationResolver', 'socket.io-client'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchTeam_1, EventGuess_1, EventAbbreviationResolver_1, Socket;
    var MatchEvent;
    return {
        setters:[
            function (MatchTeam_1_1) {
                MatchTeam_1 = MatchTeam_1_1;
            },
            function (EventGuess_1_1) {
                EventGuess_1 = EventGuess_1_1;
            },
            function (EventAbbreviationResolver_1_1) {
                EventAbbreviationResolver_1 = EventAbbreviationResolver_1_1;
            },
            function (Socket_1) {
                Socket = Socket_1;
            }],
        execute: function() {
            class MatchEvent {
                constructor() {
                    this.message = 'Hello from my királyságos aurelia!';
                    this.userInput = '';
                    this.guesses = [];
                    this.team1 = new MatchTeam_1.MatchTeam('SZAC');
                    this.team2 = new MatchTeam_1.MatchTeam('Szentendre');
                }
                changeMessage() {
                    this.message = 'changed message pressed';
                }
                userInputChanged() {
                    console.log(this.userInput);
                    this.guesses.splice(0, this.guesses.length);
                    if (this.userInput.length >= 1) {
                        var eventType = EventAbbreviationResolver_1.EventAbbreviationResolver.getEventType(this.userInput[0]);
                        if (eventType) {
                            this.guesses.push(new EventGuess_1.EventGuess('SZAC', 'Dörfi György', 6, eventType));
                        }
                    }
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
