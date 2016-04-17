/// <reference path="./../../typings/browser//ambient/socket.io-client/index.d.ts" />

import {MatchTeam} from './../Model/MatchTeam';
import {EventGuess} from './../Model/EventGuess';
import {Domain} from './../SHARED_SRC/Domain/EventType';
import * as Socket from 'socket.io-client';

export class MatchEvent {
  heading: string = 'Welcome to Aurelia!';
  firstName: string = 'John';
  lastName: string = 'Doe';
  message: string = 'Hello from my királyságos aurelia!';
  
  team1: MatchTeam = new MatchTeam('SZAC');
  team2: MatchTeam = new MatchTeam('Szentendre');
  socket: SocketIOClient.Socket;
  
  get guesses(): EventGuess[] {
    
    return [
        new EventGuess('SZAC', 'Dörfi György', 6, Domain.EventType.LongGoal),
        new EventGuess('SZAC', 'Dörfi György', 6, Domain.EventType.PenaltyGoal)
    ];
  }
  
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit(): void {
    
    alert(`Welcome, ${this.fullName}!`);
  }

  changeMessage(): void {
      this.message = 'changed 5336';
  }
  
  activate(): void {
    this.socket = Socket.connect();
    this.socket.on('connect', (data) => {
      this.socket.emit('join', 'Hello Workld from client :)');
    });
  }
}
