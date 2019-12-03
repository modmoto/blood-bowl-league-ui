import {PlayerConfig} from "../Players/PlayerConfig";

export class Race {
    constructor(raceConfigId: string, allowedPlayers: PlayerConfig[]) {
        this.raceConfigId = raceConfigId;
        this.allowedPlayers = allowedPlayers;
    }
    raceConfigId: string;
    allowedPlayers: PlayerConfig[];
}