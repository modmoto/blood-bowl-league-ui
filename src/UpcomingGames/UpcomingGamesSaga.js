import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchUpcomingGames} from "../Backend/SeasonRepository";

function* fetchUpcomingGamesDays(action) {
    const upcomingGames = yield call(fetchUpcomingGames, action.payload.seasonId);
    yield put({type: "UPCOMING_GAMES_SUCEEDED", upcomingGames: upcomingGames});
}

function* fetchUpcomingGamesSaga() {
    yield takeEvery("UPCOMING_GAMES_REQUESTED", fetchUpcomingGamesDays)
}

export default fetchUpcomingGamesSaga;