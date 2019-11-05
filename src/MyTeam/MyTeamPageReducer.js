export default function myTeamPageReducer(state = {
    myTeam: null,
    loading: true
}, action) {
    switch (action.type) {
        case 'FETCH_MY_TEAM_SUCEEDED':
            return {
                ...state,
                myTeam: action.myTeam,
                loading: false
            };
        case 'FETCH_MY_TEAM_FAILED':
            return {
                ...state,
                myTeam: null,
                loading: false
            };
        case 'FETCH_MY_TEAM_REQUESTED':
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}