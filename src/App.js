import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function App() {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button  color="inherit">League</Button>
                    <Button  color="inherit">Upcoming Games</Button>
                    <Button  color="inherit" disabled={true}>My Team</Button>
                </Toolbar>
            </AppBar>
        </div>
    )}

export default App;
