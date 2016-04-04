import {Domain} from './EventType';

export class EventTypeTranslator {
    
    static getDisplayName(eventType: Domain.EventType) : string {
        switch (eventType) {
            case Domain.EventType.LongGoal:
                return 'Long';
            case Domain.EventType.PenaltyGoal:
                return 'Penalty';
            default:
            return '?? unkown event type ??';
        }  
    }
}
