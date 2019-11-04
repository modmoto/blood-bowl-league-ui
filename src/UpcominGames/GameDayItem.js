import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export function GameDayItem(props) {
    const { value, index, gameDay } = props;

    const matchups = gameDay.matchups.map(m =>  <Box pt={4} pl={4}>{m.homeTeamName} vs {m.guestTeamName}</Box>);

    return (
        <Typography
            component="div"
            hidden={value !== index}
        >
            {matchups}
        </Typography>
    );
}