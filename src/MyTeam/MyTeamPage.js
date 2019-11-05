import React, {Component} from 'react';
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import {Typography} from "@material-ui/core";

class MyTeamPage extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MY_TEAM_REQUESTED', payload: { teamId: '406d35ee-421a-4d45-9f34-1834d5acd215' }})
    }

    render() {
        const { myTeam } = this.props
        if (!myTeam) return <></>

        return (
            <>
                <Typography variant='h5' pt={3}>{myTeam.teamName} ({myTeam.raceId})</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nr</TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myTeam.playerList.map((player, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell>{player.playerId}</TableCell>
                                <TableCell>{player.playerTypeId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { myTeam, isLoading } = state.myTeamState
    return {
        myTeam,
        isLoading
    }
}

export default connect(mapStateToProps)(MyTeamPage)