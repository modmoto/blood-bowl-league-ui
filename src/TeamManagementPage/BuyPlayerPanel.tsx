import Button from "@material-ui/core/Button";
import React, {ChangeEvent, FunctionComponent, useState} from "react";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import { useDispatch} from "react-redux";
import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";
import {BuyPlayerRequestedAction} from "./TeamManagementActions";
import {Player} from "../Models/Players/Player";
import {toAction} from "../helpers";
import {PlayerConfig} from "../Models/Players/PlayerConfig";

const BuyPlayerPanel:FunctionComponent<{
    races: Race[]
    team: FullTeam
    }> = ({ races, team }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectedPlayerType, setSelectedPlayer] = useState('');

    const fullTeam = team.team;
    const allowedPlayers = fullTeam.allowedPlayers;
    const raceOfPlayer = races.filter(r => r.raceConfigId === fullTeam.raceId)[0];
    const startingPlayer = allowedPlayers ? allowedPlayers[0].playerTypeId : '';
    const realValue = (selectedPlayerType !== '') ? selectedPlayerType : startingPlayer;

    const onBuyPlayerClick = (selectedPlayerType: string) => {
        const allowedPlayer = raceOfPlayer.allowedPlayers.filter(p => p.playerTypeId === selectedPlayerType)[0];
        const newAction = new BuyPlayerRequestedAction(
            fullTeam.version,
            selectedPlayerType,
            fullTeam.teamId,
            new Player(
                new PlayerConfig(allowedPlayer.playerStats, allowedPlayer.startingSkills, allowedPlayer.playerTypeId),
                allowedPlayer.startingSkills.map(s => s.skillId),
                0,
                selectedPlayerType),
            allowedPlayer.cost.value
        );
        dispatch(toAction(newAction));
    };

    const playerSelects = allowedPlayers.map(p =>
        <MenuItem key={p.playerTypeId} value={p.playerTypeId}>{t(`playerTypes.${p.playerTypeId}`)}</MenuItem>);

    return(
        <FormControl>
            <InputLabel id="select-player-type-label">{t('teamPage.BuyPlayerTypeLabel')}</InputLabel>
            <Select
                labelId="select-player-type-label"
                value={realValue}
                style={{minWidth: 190}}
                onChange={(e: ChangeEvent<{name?: string, value: any}>) => {
                    e.persist();
                    setSelectedPlayer(e.target.value)
            }}>
                {playerSelects}
            </Select>
            <Box pt={3}>
                <Button onClick={() => onBuyPlayerClick(realValue)}>{t('teamPage.BuyPlayerButton')}</Button>
            </Box>
        </FormControl>
    )
};

export default (BuyPlayerPanel)