import {PlayerStats} from "./PlayerStats";
import {Skill} from "./Skill";

export class PlayerConfig {
    playerStats: PlayerStats;
    startingSkills: Skill[];
    playerTypeId: string;

    constructor(playerStats: PlayerStats, startingSkills: Skill[], playerTypeId: string) {
        this.playerStats = playerStats;
        this.startingSkills = startingSkills;
        this.playerTypeId = playerTypeId;
    }
}