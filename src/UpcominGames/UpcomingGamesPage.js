import React, {useEffect} from 'react';
import {connect} from "react-redux";

function UpcomingGamePage(props) {
    useEffect(() => {
        props.dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    });

    var upcomingGames = props.upcomingGames;
    var mappedDays = upcomingGames.map(gameDay =>
        <li>
            <div>{gameDay.id}:</div>
            <ul>
                {gameDay.matchups.map(match => <li>{match.homeTeamName} vs {match.guestTeamName}</li>)}
            </ul>
        </li>
    );
    return (
        <ul>
            {mappedDays}
        </ul>
    );
}

function mapStateToProps(state) {
    const { upcomingGames, isLoading } = state.upcomingGameState
    return {
        upcomingGames: upcomingGames,
        isLoading : isLoading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)