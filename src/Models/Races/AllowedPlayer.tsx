import {PlayerStats} from "../Players/PlayerStats";

class Skill {
    skillId: string;
    constructor(skillId: string){
        this.skillId = skillId;
    }
}

class GoldCoins {

    constructor(value: number) {
        this.value = value;
    }

    value: number
}

export class AllowedPlayer {
    startingSkills: Skill[];
    playerTypeId: string;
    cost: GoldCoins;
    playerStats: PlayerStats;

    constructor(startingSkills: Skill[], playerTypeId: string, cost: GoldCoins, playerStats: PlayerStats) {
        this.startingSkills = startingSkills;
        this.playerTypeId = playerTypeId;
        this.cost = cost;
        this.playerStats = playerStats;
    }
}