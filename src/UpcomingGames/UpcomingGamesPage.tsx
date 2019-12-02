import React, {FunctionComponent} from 'react';
import {connect} from "react-redux";
import GameDayListPanel from "./GameDayListPanel";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";
import {GameDay} from "../Models/GameDay";
import {CombinedStates} from "../CombinedStates";

const UpcomingGamePage:FunctionComponent<{ upcomingGames: GameDay[], loading: boolean }>
    = ({ upcomingGames = [], loading = true }) => {

    if (loading || !upcomingGames) return <LoadingIndicator />;

    return (
        <GameDayListPanel gameDays = {upcomingGames}/>
    );
};

function mapStateToProps(state: CombinedStates) {
    const { upcomingGames, loading} = state.upcomingGameState;
    return {
        upcomingGames,
        loading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)