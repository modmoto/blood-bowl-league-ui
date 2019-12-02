import {UpcomingGameState} from "./UpcomingGames/UpcomingGamesReducer";
import {GlobalState} from "./GlobalErrorStateReducer";

export interface CombinedStates {
    upcomingGameState: UpcomingGameState;
    teamState: any,
    globalState: GlobalState
}