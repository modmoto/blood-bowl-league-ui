import React from "react";

function GameDayListPanel(props) {

    var upcomingGames = props.gameDays;
    var mappedDays = upcomingGames.map(gameDay =>
        <li>
            <div>{gameDay.id}:</div>
            <ul>
                {gameDay.matchups.map(match => <li>{match.homeTeamName} vs {match.guestTeamName}</li>)}
            </ul>
        </li>
    );
    return (
        <ul>
            {mappedDays}
        </ul>
    );
}

export default GameDayListPanel;