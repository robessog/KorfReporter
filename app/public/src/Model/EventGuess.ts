import {EventType} from './../SHARED_SRC/Domain/EventType';
import {GamePlayer}  from './../SHARED_SRC/Domain/GamePlayer';
import {EventTypeTranslator} from './../SHARED_SRC/Domain/EventTypeTranslator';
export class EventGuess {

    constructor(public player: GamePlayer, public eventType: EventType, public team: string) {}
    
    get eventTypeDisplayName(): string {
        return EventTypeTranslator.getDisplayName(this.eventType);
    }
}
