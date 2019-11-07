import { call, put, takeEvery } from 'redux-saga/effects'
import {buyPlayer, fetchMyTeamCall} from "../Backend/TeamRepository";

function* fetchMyTeam(action) {
    try {
        const myTeam = yield call(fetchMyTeamCall, action.payload.teamId);
        yield put({type: "FETCH_MY_TEAM_SUCEEDED", myTeam: myTeam});
    } catch (e) {
        yield put({type: "FETCH_MY_TEAM_FAILED", message: e.message});
    }
}

export function* fetchMyTeamSaga() {
    yield takeEvery("FETCH_MY_TEAM_REQUESTED", fetchMyTeam)
}

function* buyPlayerFunc(action) {
    try {
        const payload = action.payload;
        yield call(buyPlayer, payload.teamId, payload.playerTypeId, payload.teamVersion);
        yield put({type: "BUY_PLAYER_SUCEEDED", playerTypeId: payload.playerTypeId});
    } catch (e) {
        yield put({type: "BUY_PLAYER_FAILED", message: e.message});
    }
}

export function* buyPlayerSaga() {
    yield takeEvery("BUY_PLAYER_REQUESTED", buyPlayerFunc)
}