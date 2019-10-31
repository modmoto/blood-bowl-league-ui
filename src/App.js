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

function App() {

    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
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
        </Router>
    )}

function Home() {
    return <h2>Home</h2>;
}

export default App;
