import React from "react";
import {withTranslation} from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SkillCell from "./SkillCell";
import LevelUpCellContent from "./LevelUpCellContent";


function PlayerRow(props) {
    const { player, index, t} = props;
    return(
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell>{t("playerTypes." + player.playerTypeId)}</TableCell>
            <TableCell>7</TableCell>
            <TableCell>3</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>
                <SkillCell skills={player.skills} startingSkills={player.playerConfig.startingSkills}/>
            </TableCell>
            <TableCell>
                <LevelUpCellContent ssp={player.starPlayerPoints}/>
            </TableCell>
        </TableRow>
    )
}

export default withTranslation()(PlayerRow)