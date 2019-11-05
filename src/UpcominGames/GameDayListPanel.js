import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {GameDayItem} from "./GameDayItem";
import {Box} from "@material-ui/core";

function GameDayListPanel(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    var upcomingGames = props.gameDays;


    var mappedTabs = upcomingGames.map((gameDay, index) =>
        <Tab label={'Gameday ' + (index + 1)} key={index} />
    );

    var mappedItems = upcomingGames.map((gameDay, index) =>
        <GameDayItem gameDay={gameDay} index={index} value={value} key={index}/>
    );

    return (
        <>
            <Box mt={3}>
                <AppBar position="static" color='grey'>
                    <Tabs mt={3} value={value} onChange={handleChange}>
                        {mappedTabs}
                    </Tabs>
                </AppBar>
                {mappedItems}
            </Box>
        </>

    );
}

export default GameDayListPanel;