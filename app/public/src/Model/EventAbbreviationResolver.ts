import {} from './../bower_components/typescript-dotnet/source/System/Collections/Dictionaries/Dictionary';
import {Domain} from './../SHARED_SRC/Domain/EventType';

export class EventAbbreviationResolver {
    
    abbvMap: Dictionary<string, Domain.EventType>;
    
    static getEventType (abbreviation: string) : Domain.EventType {
        
        // switch (abbreviation) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
     return Domain.EventType.LongGoal;        
    }
}
