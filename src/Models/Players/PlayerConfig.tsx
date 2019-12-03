import {PlayerStats} from "./PlayerStats";
import {Skill} from "./Skill";

export class PlayerConfig {
    playerStats: PlayerStats;
    startingSkills: Skill[];

    constructor(playerStats: PlayerStats, startingSkills: Skill[]) {
        this.playerStats = playerStats;
        this.startingSkills = startingSkills;
    }
}