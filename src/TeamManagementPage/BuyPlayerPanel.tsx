import Button from "@material-ui/core/Button";
import React, {FunctionComponent, useState} from "react";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import {connect, useDispatch} from "react-redux";
import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";
import {CombinedStates} from "../CombinedStates";

const BuyPlayerPanel:FunctionComponent<{
    races: Race[]
    team: FullTeam
    }> = ({ races, team }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectedPlayerType, setSelectedPlayer] = useState('');

    const fullTeam = team.team;
    const allowedPlayers = fullTeam.allowedPlayers;

    const onBuyPlayerClick = (type: string) => {
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

    const playerSelects = allowedPlayers.map(p =>
        <MenuItem key={p.playerTypeId} value={p.playerTypeId}>{t(`playerTypes.${p.playerTypeId}`)}</MenuItem>);

    return(
        <FormControl>
            <InputLabel id="select-player-type-label">{t('teamPage.BuyPlayerTypeLabel')}</InputLabel>
            <Select
                labelId="select-player-type-label"
                value={selectedPlayerType}
                style={{minWidth: 190}}
                onChange={(e) => {
                    e.persist();
                    setSelectedPlayer(`${e.target.value}`)
            }}>
                {playerSelects}
            </Select>
            <Box pt={3}>
                <Button onClick={() => onBuyPlayerClick(selectedPlayerType)}>{t('teamPage.BuyPlayerButton')}</Button>
            </Box>
        </FormControl>
    )
};

function mapStateToProps(state: CombinedStates) {
    const { team, races } = state.teamState;
    return {
        team,
        races
    }
}

export default connect(mapStateToProps)(BuyPlayerPanel)