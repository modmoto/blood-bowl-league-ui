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
            const team = state.team;
            team.playerList.push(player);

            return {
                ...state,
                team: {
                    ...team,
                    teamVersion: (action.teamVersion + 1),
                    playerList: team.playerList
                },
                buyingPlayer: false
            };


        case 'ALL_RACES_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'ALL_RACES_SUCEEDED':
            return {
                ...state,
                races: action.races,
                loading: false
            };
        default:
            return state
    }
}