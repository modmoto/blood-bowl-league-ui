import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";
import {Player} from "../Models/Players/Player";
import {ReduxActionsBase} from "../ReduxActionsBase";

export const FETCH_TEAM_SUCEEDED = 'FETCH_TEAM_SUCEEDED';
export const FETCH_TEAM_REQUESTED = 'FETCH_TEAM_REQUESTED';
export const ALL_RACES_REQUESTED = 'ALL_RACES_REQUESTED';
export const ALL_RACES_SUCEEDED = 'ALL_RACES_SUCEEDED';
export const BUY_PLAYER_REQUESTED = 'BUY_PLAYER_REQUESTED';
export const BUY_PLAYER_SUCEEDED = 'BUY_PLAYER_SUCEEDED';

export class FetchTeamSucceededAction implements ReduxActionsBase {
    readonly type: typeof FETCH_TEAM_SUCEEDED = FETCH_TEAM_SUCEEDED;

    constructor(team: FullTeam) {
        this.payload = {
            team
        };
    }

    readonly payload: {
        team: FullTeam;
    };
}

export class FetchTeamRequestedAction implements ReduxActionsBase {
    readonly type: typeof FETCH_TEAM_REQUESTED = FETCH_TEAM_REQUESTED;
    readonly payload: {
        teamId: string;
    };


    constructor(payload: { teamId: string }) {
        this.payload = payload;
    }
}

export class AllRacesSucceededAction implements ReduxActionsBase {
    readonly type: typeof ALL_RACES_SUCEEDED = ALL_RACES_SUCEEDED;

    constructor(races: Race[]) {
        this.payload = {
            races
        };
    }

    readonly payload: {
        races: Race[]
    };
}

export class AllRacesRequestedAction {
    readonly type: typeof ALL_RACES_REQUESTED = ALL_RACES_REQUESTED;
}

export class BuyPlayerSucceededAction implements ReduxActionsBase {
    readonly type: typeof BUY_PLAYER_SUCEEDED = BUY_PLAYER_SUCEEDED;

    constructor(team: FullTeam, playerToBuy: Player, teamVersion: number) {
        this.payload = {
            team,
            playerToBuy,
            teamVersion
        };
    }

    readonly payload: {
        team: FullTeam;
        playerToBuy: Player;
        teamVersion: number;
    };
}

export class BuyPlayerRequestedAction implements ReduxActionsBase {
    readonly type: typeof BUY_PLAYER_REQUESTED = BUY_PLAYER_REQUESTED;

    constructor(teamVersion: number, playerTypeId: string, teamId: string, playerToBuy: Player) {
        this.payload = {
            teamId,
            teamVersion,
            playerTypeId,
            playerToBuy
        };
    }

    readonly payload: {
        teamVersion: number;
        playerTypeId: string;
        teamId: string;
        playerToBuy: Player;
    };
}

export type TeamManagementActionTypes =
    FetchTeamSucceededAction |
    FetchTeamRequestedAction |
    AllRacesRequestedAction  |
    AllRacesSucceededAction  |
    BuyPlayerSucceededAction |
    BuyPlayerRequestedAction