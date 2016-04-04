import {Domain} from './../SHARED_SRC/Domain/EventType';
import {EventTypeTranslator} from './../SHARED_SRC/Domain/EventTypeTranslator';
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
    
    get eventTypeDisplayName(): string {
        return EventTypeTranslator.getDisplayName(this.eventType);
    }
}
