import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchUser(action) {
    try {
        /*const user = yield call(Api.fetchUser, action.payload.userId);*/
        const upcomingGames = [{
            homeTeam: {
                Name: "Simon"},
            guestTeam: {
                Name: "Peter"
            }}];
        yield put({type: "UPCOMING_GAMES_SUCEEDED", upcomingGames: upcomingGames});
    } catch (e) {
        yield put({type: "UPCOMING_GAMES_FAILED", message: e.message});
    }
}

function* fetchUpocomingGamesSaga() {
    yield takeEvery("UPCOMING_GAMES_REQUESTED", fetchUser)
}

export default fetchUpocomingGamesSaga;