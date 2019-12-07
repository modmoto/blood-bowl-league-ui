import {UpcomingGameState} from "./UpcomingGames/UpcomingGamesReducer";
import {GlobalState} from "./GlobalErrorDialog/GlobalErrorStateReducer";

export interface CombinedStates {
    upcomingGameState: UpcomingGameState;
    teamState: any,
    globalState: GlobalState
}