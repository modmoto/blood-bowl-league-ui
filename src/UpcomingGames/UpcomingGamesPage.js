import React from 'react';
import {connect} from "react-redux";
import GameDayListPanel from "./GameDayListPanel";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";

function UpcomingGamePage(props) {
    var { upcomingGames, loading } = props;

    if (loading || !upcomingGames) return <LoadingIndicator />;

    return (
        <GameDayListPanel gameDays = {upcomingGames}/>
    );
}

function mapStateToProps(state) {
    const { upcomingGames, loading} = state.upcomingGameState;
    return {
        upcomingGames,
        loading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)