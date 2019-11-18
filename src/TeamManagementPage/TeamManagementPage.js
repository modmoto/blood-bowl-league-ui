import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {Box, Typography} from "@material-ui/core";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";
import {useTranslation} from 'react-i18next';
import BuyPlayerPanel from "./BuyPlayerPanel";
import PlayerListForTeam from "./PlayerListForTeam";

function TeamManagementPage(props) {
    const { team, loading, races } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectedPlayerType, setSelectedPlayer] = useState('');

    if (loading) return <LoadingIndicator />;

    const fullTeam = team.team;

    const onBuyPlayerClick = (type) => {
        const raceOfPlayer = races.filter(r => r.raceConfigId === fullTeam.raceId)[0];
        const playerConfig = raceOfPlayer.allowedPlayers.filter(p => p.playerTypeId === type)[0];
        dispatch({
            type: 'BUY_PLAYER_REQUESTED',
            payload: {
                teamId: fullTeam.teamId,
                playerTypeId: type,
                teamVersion: fullTeam.version},
            playerToBuy: {
                playerTypeId: type,
                playerPositionNumber: team.playerList.length + 1,
                starPlayerPoints: 0,
                skills: playerConfig.startingSkills.map(s => s.skillId),
                playerConfig: playerConfig
            }
        })
    };

    return (
        <Box mt={3}>
            <Typography variant='h4'>{fullTeam.teamName} ({t("races." + fullTeam.raceId)})</Typography>

            <PlayerListForTeam playerList={team.playerList}/>
            <BuyPlayerPanel value={selectedPlayerType}
                            onPlayerTypeChange={setSelectedPlayer}
                            allowedPlayers={fullTeam.allowedPlayers}
                            teamVersion={team.teamVersion}
                            teamMoney={fullTeam.teamChest.value}
                            onBuyButtonClick={() => onBuyPlayerClick(selectedPlayerType)}/>
        </Box>
    )
}

function mapStateToProps(state) {
    const { team, loading, races } = state.teamState;
    return {
        team,
        loading,
        races
    }
}

export default connect(mapStateToProps)(TeamManagementPage)