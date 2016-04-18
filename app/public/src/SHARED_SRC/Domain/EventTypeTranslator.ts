import {EventType} from './EventType';

export class EventTypeTranslator {
    static getDisplayName(eventType: EventType) : string {
        switch (eventType) {
            case EventType.LongGoal:
                return 'Long';
            case EventType.MediumGoal:
                return 'Medium';
            case EventType.PenaltyGoal:
                return 'Penalty';
            case EventType.FirstHalfStart:
                return 'First half started';
            default:
            return '???? unkown event type ????';
        }
    }
}
