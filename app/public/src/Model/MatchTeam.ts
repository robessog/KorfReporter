import {GamePlayer} from './../SHARED_SRC/Domain/GamePlayer';
export class MatchTeam {
    
    constructor(name: string) {
        this.name = name;
    }
    
    name: string;
    score: number = 0;
    isHostTeam: boolean;
    
    players: GamePlayer[] = [];
}
