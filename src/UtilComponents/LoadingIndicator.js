import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

export function LoadingIndicator() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '30vh' }}
        >
            <CircularProgress color="secondary" />
        </Grid>
    )
}