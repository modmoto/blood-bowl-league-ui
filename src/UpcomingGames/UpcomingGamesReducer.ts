import {GameDay} from "../Models/Seasons/GameDay";
import {UPCOMING_GAMES_REQUESTED, UPCOMING_GAMES_SUCEEDED, UpcomingGameActionTypes} from "./UpcomingGameActions";

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