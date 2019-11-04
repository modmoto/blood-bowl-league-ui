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
import MyTeamPage from "./MyTeam/MyTeamPage";
import UpcomingGamePage from "./UpcominGames/UpcomingGamesPage";
import Home from "./Home/HomePage";

import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import fetchUpcomingGamesSaga from "./UpcominGames/UpcomingGamesSaga";
import upcomingGamesReducer from "./UpcominGames/UpcomingGamesReducer";
import myTeamPageReducer from "./MyTeam/MyTeamPageReducer";
import fetchMyTeamSaga from "./MyTeam/MyTeamPageSaga";

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

const sagaMiddleware = createSagaMiddleware();
var rootReducer = combineReducers({
    upcomingGameState: upcomingGamesReducer,
    myTeamState: myTeamPageReducer,
})
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchUpcomingGamesSaga);
sagaMiddleware.run(fetchMyTeamSaga);

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button component={Link} to={'/'} color="inherit">Kabbl</Button>
                            <Button component={Link} to={'/upcoming-games'} color="inherit">Gamedays</Button>
                            <Button component={Link} to={'/my-team'} color="inherit">My Team</Button>
                        </Toolbar>
                    </AppBar>

                    <Container maxWidth="sm" color={theme.palette.secondary.light}>

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
                </Provider>
            </ThemeProvider>
        </Router>
    )}

export default App;
