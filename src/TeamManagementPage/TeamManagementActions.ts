import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";
import {Player} from "../Models/Players/Player";

export const FETCH_TEAM_SUCEEDED = 'FETCH_TEAM_SUCEEDED';
export const FETCH_TEAM_REQUESTED = 'FETCH_TEAM_REQUESTED';
export const ALL_RACES_REQUESTED = 'ALL_RACES_REQUESTED';
export const ALL_RACES_SUCEEDED = 'ALL_RACES_SUCEEDED';
export const BUY_PLAYER_REQUESTED = 'BUY_PLAYER_REQUESTED';
export const BUY_PLAYER_SUCEEDED = 'BUY_PLAYER_SUCEEDED';

export class FetchTeamSucceededAction {
    team: FullTeam;

    readonly type: typeof FETCH_TEAM_SUCEEDED = FETCH_TEAM_SUCEEDED;

    constructor(team: FullTeam) {
        this.team = team;
    }
}

export class FetchTeamRequestedAction {
    readonly type: typeof FETCH_TEAM_REQUESTED = FETCH_TEAM_REQUESTED;
}

export class AllRacesSucceededAction {
    readonly type: typeof ALL_RACES_SUCEEDED = ALL_RACES_SUCEEDED;
    races: Race[];

    constructor(races: Race[]) {
        this.races = races;
    }
}

export class AllRacesRequestedAction {
    readonly type: typeof ALL_RACES_REQUESTED = ALL_RACES_REQUESTED;
}

export class BuyPlayerSucceededAction {
    readonly type: typeof BUY_PLAYER_SUCEEDED = BUY_PLAYER_SUCEEDED;
    team: FullTeam;
    playerToBuy: Player;
    teamVersion: number;

    constructor(team: FullTeam, playerToBuy: Player, teamVersion: number) {
        this.team = team;
        this.playerToBuy = playerToBuy;
        this.teamVersion = teamVersion;
    }
}

export class BuyPlayerRequestedAction {
    readonly type: typeof BUY_PLAYER_REQUESTED = BUY_PLAYER_REQUESTED;
}

export type TeamManagementActionTypes =
    FetchTeamSucceededAction |
    FetchTeamRequestedAction |
    AllRacesRequestedAction  |
    AllRacesSucceededAction  |
    BuyPlayerSucceededAction |
    BuyPlayerRequestedAction