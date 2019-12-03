import React, {FunctionComponent} from "react";
import {useTranslation} from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import SkillCell from "./SkillCell";
import StarPlayerCellContent from "./StarPlayerCellContent";
import {Player} from "../Models/Players/Player";

const PlayerRow:FunctionComponent<{player: Player, index: number}> = ({ player, index }) => {
    const { t } = useTranslation();

    return(
        <TableRow key={index}>
            <TableCell component="th" scope="row">{player.playerPositionNumber}</TableCell>
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

export default (PlayerRow)