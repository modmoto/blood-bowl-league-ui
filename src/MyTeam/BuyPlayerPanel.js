import Button from "@material-ui/core/Button";
import React from "react";

function BuyPlayerPanel(props) {
    return(
        <Button onClick={() => props.onBuyButtonClick()}>buy Player</Button>
    )
}

export default BuyPlayerPanel