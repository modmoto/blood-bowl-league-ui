import {PlayerStats} from "../Players/PlayerStats";

class Skill {
    skillId: string;
    constructor(skillId: string){
        this.skillId = skillId;
    }
}

export class AllowedPlayer {
    startingSkills: Skill[];
    playerTypeId: string;
    cost: number;
    playerStats: PlayerStats;

    constructor(startingSkills: Skill[], playerTypeId: string, cost: number, playerStats: PlayerStats) {
        this.startingSkills = startingSkills;
        this.playerTypeId = playerTypeId;
        this.cost = cost;
        this.playerStats = playerStats;
    }
}