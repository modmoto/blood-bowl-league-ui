import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {GameDayItem} from "./GameDayItem";
import {Box} from "@material-ui/core";
import {useTranslation} from "react-i18next";

function GameDayListPanel(props) {
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    var upcomingGames = props.gameDays;


    var mappedTabs = upcomingGames.map((gameDay, index) =>
        <Tab label={t("gameDayPage.GameDay") + " " + (index + 1)} key={index} />
    );

    var mappedItems = upcomingGames.map((gameDay, index) =>
        <GameDayItem gameDay={gameDay} index={index} value={value} key={index}/>
    );

    return (
        <>
            <Box mt={3}>
                <AppBar position="static" color={"inherit"}>
                    <Tabs mt={3} value={value} onChange={handleChange} variant="fullWidth">
                        {mappedTabs}
                    </Tabs>
                </AppBar>
                {mappedItems}
            </Box>
        </>

    );
}

export default GameDayListPanel;