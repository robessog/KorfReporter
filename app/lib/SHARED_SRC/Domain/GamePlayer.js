"use strict";
class GamePlayer {
    constructor(firstName, lastName, jerseyNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jerseyNumber = jerseyNumber;
        this.isCaptain = false;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
exports.GamePlayer = GamePlayer;

//# sourceMappingURL=GamePlayer.js.map
