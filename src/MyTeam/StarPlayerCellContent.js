import React from "react";
const levelUpPoints = [ 6, 16, 31, 51, 76, 176 ];

function StarPlayerCellContent(props) {
    const { starPlayerPoints } = props;

    const nexLevelUp = levelUpPoints.filter(p => p > starPlayerPoints)[0];

    return(
        <>
            {starPlayerPoints} / {nexLevelUp ? nexLevelUp : '*'}
        </>
    )
}

export default (StarPlayerCellContent)