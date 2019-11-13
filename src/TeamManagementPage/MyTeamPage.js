import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {Box, Typography} from "@material-ui/core";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";
import { useTranslation } from 'react-i18next';
import BuyPlayerPanel from "./BuyPlayerPanel";
import PlayerListForTeam from "./PlayerListForTeam";

function MyTeamPage(props) {
    const { myTeam, loading } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectedPlayerType, setSelectedPlayer] = useState('');

    if (loading) return <LoadingIndicator />;

    const team = myTeam.team;

    const onBuyPlayerClick = (type) => {
        dispatch({
            type: 'BUY_PLAYER_REQUESTED',
            payload: {
                teamId: '406d35ee-421a-4d45-9f34-1834d5acd215',
                playerTypeId: type,
                teamVersion: team.version}
        })
    };

    return (
        <Box mt={3}>
            <Typography variant='h5' pt={3}>{team.teamName} ({t("races." + team.raceId)})</Typography>
            <PlayerListForTeam playerList={myTeam.playerList}/>
            <BuyPlayerPanel value={selectedPlayerType}
                            onPlayerTypeChange={setSelectedPlayer}
                            allowedPlayers={team.allowedPlayers}
                            teamVersion={myTeam.teamVersion}
                            onBuyButtonClick={() => onBuyPlayerClick(selectedPlayerType)}/>
        </Box>
    )
}

function mapStateToProps(state) {
    const { myTeam, loading } = state.myTeamState;
    return {
        myTeam,
        loading
    }
}

export default connect(mapStateToProps)(MyTeamPage)