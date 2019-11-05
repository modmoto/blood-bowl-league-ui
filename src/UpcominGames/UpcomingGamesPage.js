import React, {Component} from 'react';
import {connect} from "react-redux";
import GameDayListPanel from "./GameDayListPanel";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";

class UpcomingGamePage extends Component{
    componentDidMount() {
        this.props.dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    }

    render() {
        var { upcomingGames, loading } = this.props;
        if (loading) return <LoadingIndicator />

        return (
            <GameDayListPanel gameDays = {upcomingGames}/>
        );
    }
}

function mapStateToProps(state) {
    const { upcomingGames, loading} = state.upcomingGameState
    return {
        upcomingGames,
        loading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)