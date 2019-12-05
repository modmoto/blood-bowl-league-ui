import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {GameDay} from "../Models/Seasons/GameDay";
import React, {FunctionComponent} from "react";

const GameDayItem:FunctionComponent<{ gameDay: GameDay, index: number, value: number }>
        = ({ gameDay = null, index = 0, value = 0 }) => {

    if (!gameDay) return null;

    const matchups = gameDay.matchups.map((m, index) => <Box pt={4} pl={4} key={index}>{m.homeTeamName} vs {m.guestTeamName}</Box>);

    return (
        <Typography component="div" hidden={value !== index}>
            {matchups}
        </Typography>
    );
};

export default GameDayItem;