"use strict";
class EventTypeTranslator {
    static getDisplayName(eventType) {
        switch (eventType) {
            case 5:
                return 'Long';
            case 4:
                return 'Medium';
            case 0:
                return 'Penalty';
            case 13:
                return 'First half started';
            default:
                return '???? unkown event type ????';
        }
    }
}
exports.EventTypeTranslator = EventTypeTranslator;
