import {AllowerPlayer} from "./AllowerPlayer";

export class Race {
    constructor(raceConfigId: string, allowedPlayers: AllowerPlayer[]) {
        this.raceConfigId = raceConfigId;
        this.allowedPlayers = allowedPlayers;
    }
    raceConfigId: string;
    allowedPlayers: AllowerPlayer[];
}