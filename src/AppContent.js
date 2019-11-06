import React, { useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import MyTeamPage from "./MyTeam/MyTeamPage";
import UpcomingGamePage from "./UpcominGames/UpcomingGamesPage";
import Home from "./Home/HomePage";

import Container from "@material-ui/core/Container";
import {useDispatch} from 'react-redux'

function AppContent() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'FETCH_MY_TEAM_REQUESTED', payload: { teamId: '406d35ee-421a-4d45-9f34-1834d5acd215' }})
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: 'UPCOMING_GAMES_REQUESTED', payload: { seasonId: '7a097eae-be35-4b4d-a23d-98a6b57534f3' }})
    }, [dispatch]);

    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to={'/'} color="inherit">Kabbl</Button>
                    <Button component={Link} to={'/upcoming-games'} color="inherit">Gamedays</Button>
                    <Button component={Link} to={'/my-team'} color="inherit">My Team</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Switch>
                    <Route path="/upcoming-games">
                        <UpcomingGamePage />
                    </Route>
                    <Route path="/my-team">
                        <MyTeamPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default AppContent;
