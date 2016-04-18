System.register(['./../Model/MatchTeam', './../Model/EventGuess', './../Model/EventAbbreviationResolver', './../SHARED_SRC/Domain/GamePlayer', 'socket.io-client'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchTeam_1, EventGuess_1, EventAbbreviationResolver_1, GamePlayer_1, Socket;
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
            function (GamePlayer_1_1) {
                GamePlayer_1 = GamePlayer_1_1;
            },
            function (Socket_1) {
                Socket = Socket_1;
            }],
        execute: function() {
            class MatchEvent {
                constructor() {
                    this.message = 'Hello from my királyságos aurelia!';
                    this.eventId = 'game15';
                    this.userInput = '';
                    this.guesses = [];
                    this.events = [];
                    this.team1 = new MatchTeam_1.MatchTeam('SZAC');
                    this.team2 = new MatchTeam_1.MatchTeam('Szentendre');
                    this.selectedGuessIndex = 0;
                    this.team1.players.push(new GamePlayer_1.GamePlayer('György', 'Dörfi', 6));
                    this.team1.players.push(new GamePlayer_1.GamePlayer('Tamás', 'Berényi', 36));
                    this.team2.players.push(new GamePlayer_1.GamePlayer('Viktor', 'Horváth', 1));
                    this.team2.players.push(new GamePlayer_1.GamePlayer('Nóra', 'Molnár', 6));
                }
                changeMessage() {
                    this.message = 'changed message pressd';
                }
                userInputChanged() {
                    this.selectedGuessIndex = 0;
                    let eventType;
                    let playerNumber;
                    this.guesses.splice(0, this.guesses.length);
                    if (this.userInput.length >= 1) {
                        eventType = EventAbbreviationResolver_1.EventAbbreviationResolver.getEventType(this.userInput[0]);
                    }
                    var numberMatches = this.userInput.match(/\d+/);
                    if (numberMatches && numberMatches.length > 0) {
                        playerNumber = Number(numberMatches[0]);
                    }
                    if (eventType) {
                        var tp1 = this.filterPlayerOfTeam(playerNumber, this.team1);
                        var tp2 = this.filterPlayerOfTeam(playerNumber, this.team2);
                        if (tp1) {
                            this.guesses.push(new EventGuess_1.EventGuess(tp1, eventType, this.team1.name));
                        }
                        if (tp2) {
                            this.guesses.push(new EventGuess_1.EventGuess(tp2, eventType, this.team2.name));
                        }
                    }
                }
                keyPressed(event) {
                    switch (event.keyCode) {
                        case 40:
                            this.selectedGuessIndex = Math.min(++this.selectedGuessIndex, this.guesses.length - 1);
                            break;
                        case 38:
                            this.selectedGuessIndex = Math.max(--this.selectedGuessIndex, 0);
                            break;
                        case 13:
                            this.createEvent();
                            this.resetUserInput();
                            break;
                        default:
                            break;
                    }
                }
                getSocketUri(namespace) {
                    return `${window.location.href}${namespace}`;
                }
                activate() {
                    this.socket = Socket.connect();
                    this.socket.on('connect', (socket) => {
                        this.socket.emit('join', 'Client connected.');
                        this.socket.on('newGameEvent', (event) => {
                            this.newEventReceived(event);
                        });
                    });
                }
                filterPlayerOfTeam(jerseyNumber, team) {
                    return team.players.find((p) => { return p.jerseyNumber === jerseyNumber; });
                }
                resetUserInput() {
                    this.userInput = '';
                    this.guesses.splice(0, this.guesses.length);
                }
                newEventReceived(event) {
                    var eventGuess = new EventGuess_1.EventGuess(new GamePlayer_1.GamePlayer(event.player.firstName, event.player.lastName, event.player.jerseyNumber), event.eventType, event.team);
                    this.events.unshift(eventGuess);
                }
                createEvent() {
                    this.events.unshift(this.guesses[this.selectedGuessIndex]);
                    this.socket.emit('newGameEvent', this.events[0]);
                }
            }
            MatchEvent.socketNamespace = 'gameEvents';
            exports_1("MatchEvent", MatchEvent);
        }
    }
});

//# sourceMappingURL=matchEvent.js.map
