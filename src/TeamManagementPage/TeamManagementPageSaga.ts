import {call, put, takeEvery} from 'redux-saga/effects'
import {buyPlayer, fetchRacesCall, fetchTeamCall} from "../Backend/TeamRepository";
import {
    ALL_RACES_REQUESTED, AllRacesSucceededAction, BUY_PLAYER_REQUESTED,
    BuyPlayerRequestedAction,
    BuyPlayerSucceededAction, FETCH_TEAM_REQUESTED,
    FetchTeamRequestedAction,
    FetchTeamSucceededAction
} from "./TeamManagementActions";
import {toAction} from "../helpers";

function* fetchTeamFunc(action: FetchTeamRequestedAction) {
    const team = yield call(fetchTeamCall, action.payload.teamId);
    yield put(toAction(new FetchTeamSucceededAction(team)));
}

export function* fetchTeamSaga() {
    yield takeEvery(FETCH_TEAM_REQUESTED, fetchTeamFunc)
}

function* buyPlayerFunc(action: BuyPlayerRequestedAction) {
    const payload = action.payload;
    const playerToBuy = payload.playerToBuy;
    const player = yield call(buyPlayer, payload.teamId, payload.playerTypeId, payload.teamVersion);

    if (!player) return;
    playerToBuy.playerId = player.playerId;

    // @ts-ignore
    const newAction = new BuyPlayerSucceededAction(playerToBuy, action.teamVersion);
    yield put(toAction(newAction));
}

export function* fetchRacesSaga() {
    yield takeEvery(ALL_RACES_REQUESTED, fetchRacesFunc)
}

function* fetchRacesFunc() {
    const races = yield call(fetchRacesCall);
    yield put(toAction(new AllRacesSucceededAction(races)));
}

export function* buyPlayerSaga() {
    yield takeEvery(BUY_PLAYER_REQUESTED, buyPlayerFunc)
}