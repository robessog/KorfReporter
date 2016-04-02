/// <reference path="./../../../Domain/KorfEventType.ts" />
import {Domain} from './../../../Domain/KorfEventType';

export class EventGuess {
    
    constructor(team: string, player: string, nr: number, eventType: Domain.EventType) {
               this.eventType = eventType;
               this.teamName = team;
               this.playerName = player;
               this.playerNumber = nr;
    }
    
    teamName: string;
    playerNumber: number;
    playerName: string;
    eventType: Domain.EventType;
}
