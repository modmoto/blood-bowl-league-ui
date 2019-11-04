import React, {useEffect} from 'react';
import {connect} from "react-redux";
import GameDayListPanel from "./GameDayListPanel";

function UpcomingGamePage(props) {
    useEffect(() => {
        props.dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    });

    var upcomingGames = props.upcomingGames;

    return (
        <GameDayListPanel gameDays = {upcomingGames}/>
    );
}

function mapStateToProps(state) {
    const { upcomingGames, isLoading } = state.upcomingGameState
    return {
        upcomingGames,
        isLoading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)