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

interface UpcomingGameState {
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
    constructor(upcomingGames: GameDay[]) {
        this.payload = {
            upcomingGames: upcomingGames
        }
    }
    payload: {
        upcomingGames: GameDay[];
    };

    type: typeof UPCOMING_GAMES_SUCEEDED = UPCOMING_GAMES_SUCEEDED;
}

export class UpcomingGamesRequestedAction {
    constructor(seasonId: string) {
        this.payload = {
            seasonId: seasonId
        }
    }

    payload: {
        seasonId: string;
    };
    type: typeof UPCOMING_GAMES_REQUESTED = UPCOMING_GAMES_REQUESTED;
}

export type UpcomingGameActionTypes = UpcomingGamesSucceededAction | UpcomingGamesRequestedAction