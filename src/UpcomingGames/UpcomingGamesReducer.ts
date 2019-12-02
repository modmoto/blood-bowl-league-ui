import {GameDay} from "../Models/GameDay";

export default function upcomingGamesReducer(
    state = initialState,
    action: UpcomingGameActionTypes
): UpcomingGameState {
    switch (action.type) {
        case UPCOMING_GAMES_SUCEEDED:
            return {
                ...state,
                upcomingGames: action.payload.upcomingGames,
                loading: false
            };

        case UPCOMING_GAMES_REQUESTED:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}

export interface UpcomingGameState {
    upcomingGames: GameDay[],
    loading: boolean
}

const initialState: UpcomingGameState = {
    upcomingGames: [],
    loading: true
};

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