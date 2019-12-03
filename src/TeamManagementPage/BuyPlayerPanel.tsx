import Button from "@material-ui/core/Button";
import React, {FunctionComponent} from "react";
import {Select, Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import {Player} from "../Models/Players/Player";

const BuyPlayerPanel:FunctionComponent<{
    allowedPlayers: Player[]
    value: any
    onBuyButtonClick: any
    onPlayerTypeChange: any
    teamMoney: any
    }> = ({ allowedPlayers, value, onBuyButtonClick, onPlayerTypeChange, teamMoney }) => {
    const { t } = useTranslation();

    const playerSelects = allowedPlayers.map(p =>
        <MenuItem key={p.playerTypeId} value={p.playerTypeId}>{t(`playerTypes.${p.playerTypeId}`)}</MenuItem>);

    return(
        <FormControl>
            <InputLabel id="select-player-type-label">{t('teamPage.BuyPlayerTypeLabel')}</InputLabel>
            <Select
                labelId="select-player-type-label"
                value={value}
                style={{minWidth: 190}}
                onChange={(e) => {
                    e.persist();
                    onPlayerTypeChange(e.target.value)
            }}>
                {playerSelects}
            </Select>
            <Box pt={3}>
                <Button onClick={onBuyButtonClick}>{t('teamPage.BuyPlayerButton')}</Button>
            </Box>
            <Box pt={3}>
                <Typography variant='h5'>{teamMoney} G</Typography>
            </Box>
        </FormControl>
    )
};

export default (BuyPlayerPanel)