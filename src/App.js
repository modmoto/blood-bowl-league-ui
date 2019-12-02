import React, {Suspense} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import fetchUpcomingGamesSaga from "./UpcomingGames/UpcomingGamesSaga";
import upcomingGamesReducer from "./UpcomingGames/UpcomingGamesReducer";
import AppContent from "./AppContent";
import teamManagementPageReducer from "./TeamManagementPage/TeamManagementPageReducer";
import {buyPlayerSaga, fetchRacesSaga, fetchTeamSaga} from "./TeamManagementPage/TeamManagementPageSaga";
import globalErrorStateReducer from "./GlobalErrorStateReducer";

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
const rootReducer = combineReducers({
    upcomingGameState: upcomingGamesReducer,
    teamState: teamManagementPageReducer,
    globalState: globalErrorStateReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

window.store = store;

sagaMiddleware.run(fetchUpcomingGamesSaga);
sagaMiddleware.run(fetchTeamSaga);
sagaMiddleware.run(buyPlayerSaga);
sagaMiddleware.run(fetchRacesSaga);

function App() {
    return (
        <Router>
            <Suspense fallback={(<div>Loading</div>)}>
                <ThemeProvider theme={theme}>
                    <Provider store={store}>
                        <AppContent />
                    </Provider>
                </ThemeProvider>
            </Suspense>
        </Router>
    )
}

export default App;
