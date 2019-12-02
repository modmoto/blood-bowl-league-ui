import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchUpcomingGames} from "../Backend/SeasonRepository";
import {
    UPCOMING_GAMES_REQUESTED,
    UpcomingGamesRequestedAction,
    UpcomingGamesSucceededAction
} from "./UpcomingGamesReducer";

function* fetchUpcomingGamesDays(action: UpcomingGamesRequestedAction) {
    const upcomingGames = yield call(fetchUpcomingGames, action.payload.seasonId);
    const upcomingGamesSucceededAction = new UpcomingGamesSucceededAction(upcomingGames);
    yield put({type: upcomingGamesSucceededAction.type, payload: upcomingGamesSucceededAction.payload});
}

function* fetchUpcomingGamesSaga() {
    yield takeEvery(UPCOMING_GAMES_REQUESTED, fetchUpcomingGamesDays)
}

export default fetchUpcomingGamesSaga;