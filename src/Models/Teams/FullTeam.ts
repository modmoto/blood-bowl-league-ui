import {Player} from "../Players/Player";
import {AllowedPlayer} from "../Races/AllowedPlayer";

class TeamChest {
    value: number;
    constructor(value:number) {
        this.value = value;
    }
}

export class Team {
    allowedPlayers: AllowedPlayer[];
    raceId: string;
    teamId: string;
    version: number;
    teamChest: TeamChest;

    constructor(teamId: string, version: number, raceId: string, allowedPlayers: AllowedPlayer[], teamChest: TeamChest) {
        this.teamId = teamId;
        this.version = version;
        this.raceId = raceId;
        this.allowedPlayers = allowedPlayers;
        this.teamChest = teamChest;
    }
}

export class FullTeam {
    constructor(team: Team, playerList: Player[]) {
        this.playerList = playerList;
        this.team = team;
    }

    playerList: Player[];
    team: Team;
}