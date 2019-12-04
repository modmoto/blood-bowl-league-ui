import {AllowedPlayer} from "./AllowedPlayer";

export class Race {
    constructor(raceConfigId: string, allowedPlayers: AllowedPlayer[]) {
        this.raceConfigId = raceConfigId;
        this.allowedPlayers = allowedPlayers;
    }
    raceConfigId: string;
    allowedPlayers: AllowedPlayer[];
}