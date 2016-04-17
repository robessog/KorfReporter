import {Domain} from './EventType';

export class EventTypeTranslator {
    static getDisplayName(eventType: Domain.EventType) : string {
        switch (eventType) {
            case Domain.EventType.LongGoal:
                return 'Long';
            case Domain.EventType.PenaltyGoal:
                return 'Penalty';
            case Domain.EventType.FirstHalfStart:
                return 'First half started';
            default:
            return '?? unkown event type ??';
        }  
    }
}
