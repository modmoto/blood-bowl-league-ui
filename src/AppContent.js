import React, { useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import UpcomingGamePage from "./UpcominGames/UpcomingGamesPage";
import Home from "./Home/HomePage";
import {useTranslation} from 'react-i18next';

import Container from "@material-ui/core/Container";
import {connect, useDispatch} from 'react-redux'
import i18n from "i18next";
import TeamManagementPage from "./TeamManagementPage/TeamManagementPage";
import GeneralErrorDialog from "./GeneralErrorDialog";

function AppContent(props) {
    const { errorOccured, result } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [errorDialogIsOpen, setErrorDialogIsOpen] = React.useState(false);

    useEffect(() => {
        dispatch({type: 'FETCH_TEAM_REQUESTED', payload: { teamId: '406d35ee-421a-4d45-9f34-1834d5acd215' }})
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: 'ALL_RACES_REQUESTED'})
    }, [dispatch]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    if (errorOccured && !errorDialogIsOpen) {
        setErrorDialogIsOpen(true);
    }

    const handleCloseErrorDialog = () => {
        dispatch({type: 'GLOBAL_ERROR_DISMISSED'});
        setErrorDialogIsOpen(false);
    };

    return(
        <>
            <GeneralErrorDialog
                title={t("globalErrorDialog.Title")}
                text={t("globalErrorDialog.Text")}
                buttonText={t("globalErrorDialog.ButtonText")}
                result={result}
                open={errorDialogIsOpen}
                handleClose={handleCloseErrorDialog}/>
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

function mapStateToProps(state) {
    const { errorOccured, result } = state.globalState;
    return {
        errorOccured,
        result
    }
}

export default connect(mapStateToProps)(AppContent);
