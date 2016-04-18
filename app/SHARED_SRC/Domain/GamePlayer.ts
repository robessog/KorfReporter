export class GamePlayer {
    isCaptain: boolean = false;

    constructor(public firstName: string, public lastName: string, public jerseyNumber: number) {}

    get fullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}
