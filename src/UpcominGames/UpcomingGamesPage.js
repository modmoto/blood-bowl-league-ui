import React from 'react';
import {connect} from "react-redux";

function UpcomingGamePage(props) {
    var upcomingGames = props.upcomingGames;
    var mappedTeams = upcomingGames.map(game => <l1>{game.homeTeam.Name} vs {game.guestTeam.Name}</l1>);
    return (
        <ul>
            {mappedTeams}
        </ul>
    );
}

function mapStateToProps(state) {
    const { upcomingGames, isLoading } = state
    return {
        upcomingGames: upcomingGames,
        isLoading : isLoading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)