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
    teamName: string;

    constructor(teamId: string, version: number, raceId: string, allowedPlayers: AllowedPlayer[], teamChest: TeamChest, teamName: string) {
        this.teamId = teamId;
        this.version = version;
        this.raceId = raceId;
        this.allowedPlayers = allowedPlayers;
        this.teamChest = teamChest;
        this.teamName = teamName;
    }
}

export class FullTeam {
    playerList: Player[];
    team: Team;

    constructor(playerList: Player[], team: Team) {
        this.playerList = playerList;
        this.team = team;
    }
}