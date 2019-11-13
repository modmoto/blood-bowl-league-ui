import Button from "@material-ui/core/Button";
import React from "react";
import {Select, Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {withTranslation} from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

function BuyPlayerPanel(props) {
    const { allowedPlayers, value, onBuyButtonClick, t, onPlayerTypeChange, teamMoney} = props;
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
                    e.persist()
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
}

export default withTranslation()(BuyPlayerPanel)