 export namespace Domain {
   export const enum EventType {
        PenaltyGoal,
        RunningInShotGoal,
        FreePassGoal,
        ShortGoal,
        MediumGoal,
        LongGoal,
        
        FreePassMiss,
        PenaltyMiss,
        
        Substitution,
        Injury,
        TimeOut,
        YellowCard,
        RedCard,
        
        FirstHalfStart,
        FirstHalfEnd,
        SecondHalfStart,
        SecondHalfEnd
    }
}