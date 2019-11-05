import React, { useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import GameDayListPanel from "./GameDayListPanel";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";

function UpcomingGamePage(props) {
    var { upcomingGames, loading } = props;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    }, [dispatch]);

    if (loading) return <LoadingIndicator />

    return (
        <GameDayListPanel gameDays = {upcomingGames}/>
    );
}

function mapStateToProps(state) {
    const { upcomingGames, loading} = state.upcomingGameState
    return {
        upcomingGames,
        loading
    }
}

export default connect(mapStateToProps)(UpcomingGamePage)