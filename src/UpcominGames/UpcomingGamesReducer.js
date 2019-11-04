export default function upcomingGamesReducer(state = {
    upcomingGames: []
}, action) {
    switch (action.type) {
        case 'UPCOMING_GAMES_SUCEEDED':
            return {
                ...state,
                upcomingGames: action.upcomingGames,
                loading: false
            };
        case 'UPCOMING_GAMES_FAILED':
            return {
                ...state,
                upcomingGames: []
            };
        case 'UPCOMING_GAMES_REQUESTED':
            return {
            ...state,
            loading: true };
        default:
            return state
    }
}