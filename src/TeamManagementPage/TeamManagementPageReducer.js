export default function teamManagementPageReducer(state = {
    team: null,
    loading: true,
    buyingPlayer: false
}, action) {
    switch (action.type) {
        case 'FETCH_TEAM_SUCEEDED':
            return {
                ...state,
                team: action.team,
                loading: false
            };
        case 'FETCH_TEAM_FAILED':
            return {
                ...state,
                team: null,
                loading: false
            };
        case 'FETCH_TEAM_REQUESTED':
            return {
                ...state,
                loading: true
            };


        case 'BUY_PLAYER_REQUESTED':
            return {
                ...state,
                buyingPlayer: true
            };
        case 'BUY_PLAYER_SUCEEDED':
            const player = action.playerToBuy;
            const teamVersion = action.teamVersion;
            let team = state.team;
            team.teamVersion = teamVersion;
            team.playerList.push(player);
            return {
                ...state,
                team: team,
                buyingPlayer: false
            };
        case 'BUY_PLAYER_FAILED':
            return {
                ...state,
                buyingPlayer: false
            };
        default:
            return state
    }
}