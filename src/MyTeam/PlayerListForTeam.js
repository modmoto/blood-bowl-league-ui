import React from "react";
import {withTranslation} from "react-i18next";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PlayerRow from "./PlayerRow";

function PlayerListForTeam(props) {
    const { playerList, t } = props;

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>{t("teamPage.No")}</TableCell>
                    <TableCell>{t("teamPage.Type")}</TableCell>
                    <StatCell>{t("teamPage.MA")}</StatCell>
                    <StatCell>{t("teamPage.ST")}lolol</StatCell>
                    <StatCell>{t("teamPage.AG")}</StatCell>
                    <StatCell>{t("teamPage.AV")}</StatCell>
                    <TableCell>{t("teamPage.PlayerSkills")}</TableCell>
                    <TableCell>{t("teamPage.SSP")}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {playerList.map((player, index) => (
                    <PlayerRow
                        key={index}
                        player={player}
                        index={index}/>
                ))}
            </TableBody>
        </Table>
    )
}

function StatCell(props) {
    return <TableCell size={"small"}>{props.children}</TableCell>
}

export default withTranslation()(PlayerListForTeam)