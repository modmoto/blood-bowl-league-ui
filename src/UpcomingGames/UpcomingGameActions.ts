import {GameDay} from "../Models/Seasons/GameDay";

export const UPCOMING_GAMES_REQUESTED = 'UPCOMING_GAMES_REQUESTED';
export const UPCOMING_GAMES_SUCEEDED = 'UPCOMING_GAMES_SUCEEDED';

export class UpcomingGamesSucceededAction {
    readonly payload: {
        upcomingGames: GameDay[];
    };

    readonly type: typeof UPCOMING_GAMES_SUCEEDED = UPCOMING_GAMES_SUCEEDED;
    constructor(upcomingGames: GameDay[]) {
        this.payload = {
            upcomingGames: upcomingGames
        }
    }
}

export class UpcomingGamesRequestedAction {
    readonly payload: {
        seasonId: string;
    };
    readonly type: typeof UPCOMING_GAMES_REQUESTED = UPCOMING_GAMES_REQUESTED;

    constructor(seasonId: string) {
        this.payload = {
            seasonId: seasonId
        }
    }
}

export type UpcomingGameActionTypes = UpcomingGamesSucceededAction | UpcomingGamesRequestedAction