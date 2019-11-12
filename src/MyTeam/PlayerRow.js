import React from "react";
import {withTranslation} from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SkillCell from "./SkillCell";
import StarPlayerCellContent from "./StarPlayerCellContent";


function PlayerRow(props) {
    const { player, index, t} = props;
    return(
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell>{t("playerTypes." + player.playerTypeId)}</TableCell>
            <TableCell>{player.playerConfig.playerStats.movement}</TableCell>
            <TableCell>{player.playerConfig.playerStats.strength}</TableCell>
            <TableCell>{player.playerConfig.playerStats.agility}</TableCell>
            <TableCell>{player.playerConfig.playerStats.armor}</TableCell>
            <TableCell>
                <SkillCell skills={player.skills} startingSkills={player.playerConfig.startingSkills}/>
            </TableCell>
            <TableCell>
                <StarPlayerCellContent starPlayerPoints={player.starPlayerPoints}/>
            </TableCell>
        </TableRow>
    )
}

export default withTranslation()(PlayerRow)