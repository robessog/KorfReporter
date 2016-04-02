export class MatchTeam {
    
    constructor(name: string) {
        this.name = name;
    }
    
    name: string;
    score: number = 0;
    isHostTeam: boolean;
}
