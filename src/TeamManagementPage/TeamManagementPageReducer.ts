import {FullTeam} from "../Models/Teams/FullTeam";
import {
    ALL_RACES_REQUESTED,
    ALL_RACES_SUCEEDED,
    BUY_PLAYER_REQUESTED,
    BUY_PLAYER_SUCEEDED,
    FETCH_TEAM_REQUESTED,
    FETCH_TEAM_SUCEEDED,
    TeamManagementActionTypes
} from "./TeamManagementActions";
import {Race} from "../Models/Races/Race";


export default function teamManagementPageReducer(
    state = initialState,
    action: TeamManagementActionTypes
): TeamManagementState {
    switch (action.type) {
        case FETCH_TEAM_SUCEEDED:
            return {
                ...state,
                team: action.payload.team,
                loading: false
            };
        case FETCH_TEAM_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case ALL_RACES_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case ALL_RACES_SUCEEDED:
            return {
                ...state,
                races: action.payload.races,
                loading: false
            };

        case BUY_PLAYER_REQUESTED:
            return {
                ...state,
                buyingPlayer: true
            };
        case BUY_PLAYER_SUCEEDED:
            const player = action.payload.playerToBuy;
            const team = state.team;
            team.playerList.push(player);
            team.team.version = team.team.version + 1;

            return {
                ...state,
                team: {
                    ...team,
                },
                buyingPlayer: false
            };

        default:
            return state
    }
}

export interface TeamManagementState {
    team: FullTeam,
    races: Race[],
    loading: boolean,
    buyingPlayer: boolean,
}


const initialState: TeamManagementState = {
    // @ts-ignore
    team: null,
    races: [],
    loading: true,
    buyingPlayer: false
};