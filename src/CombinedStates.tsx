import {UpcomingGameState} from "./UpcomingGames/UpcomingGamesReducer";

export interface CombinedStates {
    upcomingGameState: UpcomingGameState;
    teamState: any,
    globalState: any
}