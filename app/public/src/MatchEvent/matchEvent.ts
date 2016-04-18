/// <reference path="./../../typings/browser//ambient/socket.io-client/index.d.ts" />

import {MatchTeam} from './../Model/MatchTeam';
import {EventGuess} from './../Model/EventGuess';
import {EventAbbreviationResolver} from './../Model/EventAbbreviationResolver';
import {Domain} from './../SHARED_SRC/Domain/EventType';
import * as Socket from 'socket.io-client';

export class MatchEvent {
  message: string = 'Hello from my királyságos aurelia!';
  
  userInput: string = '';
  guesses: EventGuess[] = [];
  team1: MatchTeam = new MatchTeam('SZAC');
  team2: MatchTeam = new MatchTeam('Szentendre');
  
  socket: SocketIOClient.Socket;
  
  changeMessage(): void {
      this.message = 'changed message pressed';
  }
  
  userInputChanged(): void {
    console.log(this.userInput);
    
    this.guesses.splice(0, this.guesses.length);
    if (this.userInput.length >= 1) {
      var eventType = EventAbbreviationResolver.getEventType(this.userInput[0]);
      if (eventType) {
       this.guesses.push(new EventGuess('SZAC', 'Dörfi György', 6, eventType));
      }
    }
  }
  
  activate(): void {
    this.socket = Socket.connect();
    this.socket.on('connect', (data) => {
      this.socket.emit('join', 'Hello Workld from client :)');
    });
  }
}
