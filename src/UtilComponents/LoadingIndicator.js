import Box from "@material-ui/core/Box";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export function LoadingIndicator() {
    return (
        <Box style={{position: 'relative'}} pt={10}>
            <CircularProgress style={{marginLeft: '50%'}} color="secondary" />
        </Box>
    )
}