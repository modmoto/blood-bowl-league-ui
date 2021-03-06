import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchUpcomingGames} from "../Backend/SeasonRepository";
import {toAction} from "../helpers";
import {
    UPCOMING_GAMES_REQUESTED,
    UpcomingGamesRequestedAction,
    UpcomingGamesSucceededAction
} from "./UpcomingGameActions";

function* fetchUpcomingGamesDays(action: UpcomingGamesRequestedAction) {
    const upcomingGames = yield call(fetchUpcomingGames, action.payload.seasonId);
    const newAction = new UpcomingGamesSucceededAction(upcomingGames);
    yield put(toAction(newAction));
}

function* fetchUpcomingGamesSaga() {
    yield takeEvery(UPCOMING_GAMES_REQUESTED, fetchUpcomingGamesDays)
}

export default fetchUpcomingGamesSaga;