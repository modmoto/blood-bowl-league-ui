import React from 'react';
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import {Box, Typography} from "@material-ui/core";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";
import { useTranslation } from 'react-i18next';

function MyTeamPage(props) {
    const { myTeam, loading } = props
    const { t } = useTranslation();

    if (loading) return <LoadingIndicator />

    return (
        <Box mt={3}>
        <Typography variant='h5' pt={3}>{myTeam.teamName} ({t(myTeam.raceId)})</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nr</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {myTeam.playerList.map((player, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{t(player.playerTypeId)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Box>
    )
}

function mapStateToProps(state) {
    const { myTeam, loading } = state.myTeamState
    return {
        myTeam,
        loading
    }
}

export default connect(mapStateToProps)(MyTeamPage)