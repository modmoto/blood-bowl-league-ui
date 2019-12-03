import {PlayerConfig} from "./PlayerConfig";

export class Player {
    playerPositionNumber: number = 0;
    playerId: string = '';

    readonly playerConfig: PlayerConfig;
    readonly skills: string[];
    readonly starPlayerPoints: number;
    readonly playerTypeId: string;

    constructor(
        playerConfig: PlayerConfig,
        skills: string[],
        starPlayerPoints: number,
        playerTypeId: string)
    {
        this.playerConfig = playerConfig;
        this.skills = skills;
        this.starPlayerPoints = starPlayerPoints;
        this.playerTypeId = playerTypeId;
    }
}