import React from "react";
import {Box} from "@material-ui/core";
import {DoubleArrow} from "@material-ui/icons";
import {yellow} from "@material-ui/core/colors";

const levelUpPoints = [ 6, 16, 31, 51, 76, 176 ];

function StarPlayerCellContent(props) {
    const { player } = props;

    const nexLevelUp = levelUpPoints.filter(p => p > player.starPlayerPoints)[0];
    const hasLevelUpToDo = player.CanRegisterLevelUpSkillPointRoll || player.HasFreeSkill;

    return(
        <>
            <Box style={{float: "left"}} pr={1.5}>
                {player.starPlayerPoints} / {nexLevelUp ? nexLevelUp : '*'}
            </Box>
            <Box color={yellow[700]}>
                {hasLevelUpToDo ? <DoubleArrow color='inherit'/> : null}
            </Box>
        </>
    )
}

export default (StarPlayerCellContent)