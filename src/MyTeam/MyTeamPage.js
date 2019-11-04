import React, {useEffect} from 'react';
import {connect} from "react-redux";

function MyTeamPage(props) {
    const { myTeam } = props
    useEffect(() => {
        props.dispatch({type: 'FETCH_MY_TEAM_REQUESTED', payload: { teamId: '406d35ee-421a-4d45-9f34-1834d5acd215' }})
    });
    if (!myTeam) return <></>
    return <h2>{myTeam.teamName} ({myTeam.raceId})</h2>;
}

function mapStateToProps(state) {
    const { myTeam, isLoading } = state.myTeamState
    return {
        myTeam: myTeam,
        isLoading : isLoading
    }
}

export default connect(mapStateToProps)(MyTeamPage)