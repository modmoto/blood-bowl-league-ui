import {Player} from "../Players/Player";

export class Team {
    constructor(teamId: string, version: number, raceId: string) {
        this.teamId = teamId;
        this.version = version;
        this.raceId = raceId;
    }

    raceId: string;
    teamId: string;
    version: number;
}

export class FullTeam {
    constructor(team: Team, playerList: Player[]) {
        this.playerList = playerList;
        this.team = team;
    }

    playerList: Player[];
    team: Team;
}