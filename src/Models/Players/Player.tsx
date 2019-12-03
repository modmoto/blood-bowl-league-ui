import {PlayerConfig} from "./PlayerConfig";

export class Player {
    playerPositionNumber: number;
    playerConfig: PlayerConfig;
    skills: string[];
    starPlayerPoints: number;
    playerTypeId: string;
    playerId: string;


    constructor(playerPositionNumber: number, playerConfig: PlayerConfig, skills: string[], starPlayerPoints: number, playerTypeId: string, playerId: string) {
        this.playerPositionNumber = playerPositionNumber;
        this.playerConfig = playerConfig;
        this.skills = skills;
        this.starPlayerPoints = starPlayerPoints;
        this.playerTypeId = playerTypeId;
        this.playerId = playerId;
    }
}