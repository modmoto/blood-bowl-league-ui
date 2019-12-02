import React, {FunctionComponent} from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Box} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {GameDay} from "../Models/GameDay";
import GameDayItem from "./GameDayItem";

const GameDayListPanel:FunctionComponent<{ gameDays: GameDay[] }> = ({ gameDays = [] }) => {
    const { t } = useTranslation();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
        setSelectedIndex(newValue);
    };

    const mappedTabs = gameDays.map((gameDay, index) =>
        <Tab label={t("gameDayPage.GameDay") + " " + (index + 1)} key={index} />
    );

    const mappedItems = gameDays.map((gameDay, index) =>
        <GameDayItem gameDay={gameDay} index={index} value={selectedIndex} key={index}/>
    );

    return (
        <>
            <Box mt={3}>
                <AppBar position="static" color={"inherit"}>
                    <Tabs value={selectedIndex} onChange={handleChange} variant="fullWidth">
                        {mappedTabs}
                    </Tabs>
                </AppBar>
                {mappedItems}
            </Box>
        </>

    );
};

export default GameDayListPanel;