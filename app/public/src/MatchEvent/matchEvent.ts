/// <reference path="./../../typings/browser//ambient/socket.io-client/index.d.ts" />

import {MatchTeam} from './../Model/MatchTeam';
import {EventGuess} from './../Model/EventGuess';
import {EventAbbreviationResolver} from './../Model/EventAbbreviationResolver';
import {EventType} from './../SHARED_SRC/Domain/EventType';
import {GamePlayer} from './../SHARED_SRC/Domain/GamePlayer';
import * as Socket from 'socket.io-client';

export class MatchEvent {
  message: string = 'Hello from my királyságos aurelia!';
  
  eventId: string = 'game15';
  static socketNamespace = 'gameEvents';
  userInput: string = '';
  guesses: EventGuess[] = [];
  events: EventGuess[] = [];
  team1: MatchTeam = new MatchTeam('SZAC');
  team2: MatchTeam = new MatchTeam('Szentendre');
  selectedGuessIndex = 0;
  
  socket: SocketIOClient.Socket;
  
  
  constructor() {
    this.team1.players.push(new GamePlayer('György', 'Dörfi', 6));
    this.team1.players.push(new GamePlayer('Tamás', 'Berényi', 36));
    
    this.team2.players.push(new GamePlayer('Viktor', 'Horváth', 1));
    this.team2.players.push(new GamePlayer('Nórika', 'Molnár', 6));
  }
  
  changeMessage(): void {
      this.message = 'changed message pressd';
  }
  
  userInputChanged(): void {
    this.selectedGuessIndex = 0;
    let eventType: EventType;
    let playerNumber: number;
    this.guesses.splice(0, this.guesses.length);
    if (this.userInput.length >= 1) {
      eventType = EventAbbreviationResolver.getEventType(this.userInput[0]);
    }
    
    var numberMatches = this.userInput.match(/\d+/);
    if (numberMatches && numberMatches.length > 0 ) {
      playerNumber = Number(numberMatches[0]);
    }
    
    if (eventType) {
      var tp1 = this.filterPlayerOfTeam(playerNumber, this.team1);
      var tp2 = this.filterPlayerOfTeam(playerNumber, this.team2);
      if (tp1) {
        this.guesses.push(new EventGuess(tp1, eventType, this.team1.name));
      }
      if (tp2) {
        this.guesses.push(new EventGuess(tp2, eventType, this.team2.name));
      }
    }
  }
  
  keyPressed(event: KeyboardEvent) : void {
    switch (event.keyCode) {
      case 40:
        this.selectedGuessIndex = Math.min(++this.selectedGuessIndex, this.guesses.length - 1);
        break;
    case 38:
        this.selectedGuessIndex = Math.max(--this.selectedGuessIndex, 0);
        break;
    case 13:
        if(this.guesses.length){
          this.createEvent();
          this.resetUserInput();
        }
        break;
      default:
        break;
    }
  }
  
  private getSocketUri(namespace: string) : string {
    return `${window.location.href}${namespace}`;
  }
  
  activate(): void {
    this.socket = Socket.connect(/*this.getSocketUri(MatchEvent.socketNamespace)*/);
    this.socket.on('connect', (socket) => {
      this.socket.emit('join', 'Client connected.');
      this.socket.on('newGameEvent', (event: EventGuess) => {
        this.newEventReceived(event); 
      });
    });
  }
  
  private filterPlayerOfTeam(jerseyNumber: number, team: MatchTeam) : GamePlayer {
    return team.players.find((p) => { return p.jerseyNumber === jerseyNumber; });
  }
 
  private resetUserInput() : void {
   this.userInput = '';
   this.guesses.splice(0, this.guesses.length); 
  }
 
 private newEventReceived(event: EventGuess) : void {
   var eventGuess = new EventGuess(
     new GamePlayer(event.player.firstName, event.player.lastName, event.player.jerseyNumber), event.eventType, event.team);
   this.events.unshift(eventGuess);
 }
 
  private createEvent() : void {
    this.events.unshift(this.guesses[this.selectedGuessIndex]);
    this.socket.emit('newGameEvent', this.events[0]);
  } 
}
