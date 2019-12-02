import React, { useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import UpcomingGamePage from "./UpcomingGames/UpcomingGamesPage";
import Home from "./Home/HomePage";
import {useTranslation} from 'react-i18next';

import Container from "@material-ui/core/Container";
import {useDispatch} from 'react-redux'
import i18n from "i18next";
import TeamManagementPage from "./TeamManagementPage/TeamManagementPage";
import GeneralErrorDialog from "./GeneralErrorDialog";
import {UpcomingGamesRequestedAction} from "./UpcomingGames/UpcomingGamesReducer";

function AppContent() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch({type: 'FETCH_TEAM_REQUESTED', payload: { teamId: '406d35ee-421a-4d45-9f34-1834d5acd215' }})
    }, [dispatch]);

    useEffect(() => {
        const action = new UpcomingGamesRequestedAction('7a097eae-be35-4b4d-a23d-98a6b57534f3');
        dispatch({type: action.type, payload: action.payload})
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: 'ALL_RACES_REQUESTED'})
    }, [dispatch]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <>
            <GeneralErrorDialog/>
            <AppBar position="static">
                <Toolbar>
                    <ToolbarButton to={'/'}>KABBL</ToolbarButton>
                    <ToolbarButton to={'/upcoming-games'}>{t("appContent.GameDays")}</ToolbarButton>
                    <ToolbarButton to={'/my-team'}>{t("appContent.MyTeam")}</ToolbarButton>
                    <div style={{ marginLeft: 'auto' }}>
                        <Button onClick={() => changeLanguage('de')}>DE</Button>
                        <Button onClick={() => changeLanguage('en')}>EN</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Container maxWidth={'md'}>
                <Switch>
                    <Route path="/upcoming-games">
                        <UpcomingGamePage />
                    </Route>
                    <Route path="/my-team">
                        <TeamManagementPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

function ToolbarButton(props) {
    return <Button size={'large'} component={Link} to={props.to}>{props.children}</Button>
}

export default AppContent;
