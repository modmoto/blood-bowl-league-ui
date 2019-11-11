import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

import {Box, Typography} from "@material-ui/core";
import {LoadingIndicator} from "../UtilComponents/LoadingIndicator";
import { useTranslation } from 'react-i18next';
import BuyPlayerPanel from "./BuyPlayerPanel";

function MyTeamPage(props) {
    const { myTeam, loading } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [selectedPlayerType, setSelectedPlayer] = useState('')

    if (loading) return <LoadingIndicator />

    const team = myTeam.team;

    const onBuyPlayerClick = (type) => {
        dispatch({
            type: 'BUY_PLAYER_REQUESTED',
            payload: {
                teamId: '406d35ee-421a-4d45-9f34-1834d5acd215',
                playerTypeId: type,
                teamVersion: team.version}
        })
    }

    return (
        <Box mt={3}>
            <Typography variant='h5' pt={3}>{team.teamName} ({t("races." + team.raceId)})</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t("teamPage.No")}</TableCell>
                        <TableCell>{t("teamPage.Type")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myTeam.playerList.map((player, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{t("playerTypes." + player.playerTypeId)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
                <BuyPlayerPanel value={selectedPlayerType}
                                onPlayerTypeChange={setSelectedPlayer}
                                allowedPlayers={team.allowedPlayers}
                                teamVersion={myTeam.teamVersion}
                                onBuyButtonClick={() => onBuyPlayerClick(selectedPlayerType)}/>
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