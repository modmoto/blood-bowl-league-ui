import React, {FunctionComponent} from "react";
const levelUpPoints = [ 6, 16, 31, 51, 76, 176 ];

const StarPlayerCellContent:FunctionComponent<{starPlayerPoints: number}> = ({ starPlayerPoints }) => {
    const nexLevelUp = levelUpPoints.filter(p => p > starPlayerPoints)[0];

    return(
        <>
            {starPlayerPoints} / {nexLevelUp ? nexLevelUp : '*'}
        </>
    )
}

export default (StarPlayerCellContent)