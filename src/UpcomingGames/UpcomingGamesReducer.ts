import {GameDay} from "../Models/GameDay";

export default function upcomingGamesReducer(
    state = initialState,
    action: UpcomingGameActionTypes
): UpcomingGameState {
    switch (action.type) {
        case UPCOMING_GAMES_SUCEEDED:
            return {
                ...state,
                upcomingGames: action.upcomingGames,
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

interface UpcomingGameSessionSuccededAction {
    type: typeof UPCOMING_GAMES_SUCEEDED
    upcomingGames: GameDay[]
    loading: boolean
}

interface UpcomingGameSessionRequestedAction {
    type: typeof UPCOMING_GAMES_REQUESTED
    loading: boolean
}

export type UpcomingGameActionTypes = UpcomingGameSessionSuccededAction | UpcomingGameSessionRequestedAction