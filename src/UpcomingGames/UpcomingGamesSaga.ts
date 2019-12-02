import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchUpcomingGames} from "../Backend/SeasonRepository";
import {
    UPCOMING_GAMES_REQUESTED,
    UpcomingGamesRequestedAction,
    UpcomingGamesSucceededAction
} from "./UpcomingGamesReducer";
import {toAction} from "../helpers";

function* fetchUpcomingGamesDays(action: UpcomingGamesRequestedAction) {
    const upcomingGames = yield call(fetchUpcomingGames, action.payload.seasonId);
    yield put(toAction(new UpcomingGamesSucceededAction(upcomingGames)));
}

function* fetchUpcomingGamesSaga() {
    yield takeEvery(UPCOMING_GAMES_REQUESTED, fetchUpcomingGamesDays)
}

export default fetchUpcomingGamesSaga;