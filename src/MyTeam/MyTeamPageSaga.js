import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchMyTeamCall} from "../Backend/TeamRepository";

function* fetchMyTeam(action) {
    try {
        const myTeam = yield call(fetchMyTeamCall, action.payload.teamId);
        yield put({type: "FETCH_MY_TEAM_SUCEEDED", myTeam: myTeam});
    } catch (e) {
        yield put({type: "FETCH_MY_TEAM_FAILED", message: e.message});
    }
}

function* fetchMyTeamSaga() {
    yield takeEvery("FETCH_MY_TEAM_REQUESTED", fetchMyTeam)
}

export default fetchMyTeamSaga;