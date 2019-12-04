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

    constructor(teamId: string) {
        this.payload = {
            teamId
        };
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

export class AllRacesRequestedAction implements ReduxActionsBase {
    readonly type: typeof ALL_RACES_REQUESTED = ALL_RACES_REQUESTED;
    readonly payload: any = {};
}

export class BuyPlayerSucceededAction implements ReduxActionsBase {
    readonly type: typeof BUY_PLAYER_SUCEEDED = BUY_PLAYER_SUCEEDED;

    constructor(playerToBuy: Player, playerCosts: number) {
        this.payload = {
            playerToBuy,
            playerCosts
        };
    }

    readonly payload: {
        playerCosts: number;
        playerToBuy: Player;
    };
}

export class BuyPlayerRequestedAction implements ReduxActionsBase {
    readonly type: typeof BUY_PLAYER_REQUESTED = BUY_PLAYER_REQUESTED;

    constructor(teamVersion: number, playerTypeId: string, teamId: string, playerToBuy: Player, playerCosts: number) {
        this.payload = {
            teamId,
            teamVersion,
            playerTypeId,
            playerToBuy,
            playerCosts
        };
    }

    readonly payload: {
        playerCosts: number;
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