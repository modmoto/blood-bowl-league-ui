import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LeaguePage from "./League/LeaguePage";
import MyTeamPage from "./MyTeam/MyTeamPage";
import UpcomingGamePage from "./UpcominGames/UpcomingGamesPage";
import Home from "./Home/HomePage";

import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#b2fab4',
            main: '#81c784',
            dark: '#519657',
            contrastText: '#000',
        },
        secondary: {
            light: '#ffddc1',
            main: '#ffab91',
            dark: '#c97b63',
            contrastText: '#000',
        },
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <Button  component={Link} to={'/'} color="inherit">Kabbl</Button>
                        <Button  component={Link} to={'/league'} color="inherit">League</Button>
                        <Button  component={Link} to={'/upcoming-games'} color="inherit">Upcoming Games</Button>
                        <Button  component={Link} to={'/my-team'} color="inherit">My Team</Button>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route path="/league">
                        <LeaguePage />
                    </Route>
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
            </ThemeProvider>
        </Router>
    )}

export default App;
