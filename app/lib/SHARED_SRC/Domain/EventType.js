"use strict";
var Domain;
(function (Domain) {
    (function (EventType) {
        EventType[EventType["PenaltyGoal"] = 0] = "PenaltyGoal";
        EventType[EventType["RunningInShotGoal"] = 1] = "RunningInShotGoal";
        EventType[EventType["FreePassGoal"] = 2] = "FreePassGoal";
        EventType[EventType["ShortGoal"] = 3] = "ShortGoal";
        EventType[EventType["MediumGoal"] = 4] = "MediumGoal";
        EventType[EventType["LongGoal"] = 5] = "LongGoal";
        EventType[EventType["FreePassMiss"] = 6] = "FreePassMiss";
        EventType[EventType["PenaltyMiss"] = 7] = "PenaltyMiss";
        EventType[EventType["Substitution"] = 8] = "Substitution";
        EventType[EventType["Injury"] = 9] = "Injury";
        EventType[EventType["TimeOut"] = 10] = "TimeOut";
        EventType[EventType["YellowCard"] = 11] = "YellowCard";
        EventType[EventType["RedCard"] = 12] = "RedCard";
        EventType[EventType["FirstHalfStart"] = 13] = "FirstHalfStart";
        EventType[EventType["FirstHalfEnd"] = 14] = "FirstHalfEnd";
        EventType[EventType["SecondHalfStart"] = 15] = "SecondHalfStart";
        EventType[EventType["SecondHalfEnd"] = 16] = "SecondHalfEnd";
    })(Domain.EventType || (Domain.EventType = {}));
    var EventType = Domain.EventType;
})(Domain = exports.Domain || (exports.Domain = {}));
