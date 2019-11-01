export default function upcomingGamesReducer(state = {}, action) {
    switch (action.type) {
        case 'UPCOMING_GAMES_SUCEEDED':
            return { upcomingGames: action.upcomingGames };
        case 'UPCOMING_GAMES_FAILED':
            return { upcomingGames: null };
        case 'UPCOMING_GAMES_REQUESTED':
            return { loading: true };
        default:
            return state
    }
}