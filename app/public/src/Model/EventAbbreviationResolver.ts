// /// <reference path="./../../bower_components/typescript-dotnet/source/System/Collections/Dictionaries/IDictionary.d.ts" />

// import {Dictionary} from './../bower_components/typescript-dotnet/source/System/Collections/Dictionaries/Dictionary';
// import {Dictionary} from './../bower_components/typescript-dotnet/dist/system/System/Collections/Dictionaries/Dictionary';
import {Domain} from './../SHARED_SRC/Domain/EventType';

export class EventAbbreviationResolver {
    
    // abbrvMap: IDictionary<string, Domain.EventType> = new Dict.Dictionary<string, Domain.EventType>();
    private static abbrvMap: {[key: string ]: Domain.EventType} = {
        'l': Domain.EventType.LongGoal,
        'm': Domain.EventType.MediumGoal
     } ;

    static getEventType (abbreviation: string) : Domain.EventType {
        return EventAbbreviationResolver.abbrvMap[abbreviation];       
    }
}
