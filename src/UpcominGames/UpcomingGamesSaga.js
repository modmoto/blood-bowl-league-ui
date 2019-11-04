import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchUpcomingGames} from "../Backend/SeasonRepository";

function* fetchUpcomingGamesDays(action) {
    try {
        const upcomingGames = yield call(fetchUpcomingGames, action.payload.seasonId);
        yield put({type: "UPCOMING_GAMES_SUCEEDED", upcomingGames: upcomingGames});
    } catch (e) {
        yield put({type: "UPCOMING_GAMES_FAILED", message: e.message});
    }
}

function* fetchUpcomingGamesSaga() {
    yield takeEvery("UPCOMING_GAMES_REQUESTED", fetchUpcomingGamesDays)
}

export default fetchUpcomingGamesSaga;