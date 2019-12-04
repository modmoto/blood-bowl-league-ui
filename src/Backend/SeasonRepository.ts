import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/Seasons/GameDay";
import {Matchup} from "../Models/Seasons/Matchup";

const BackendUrl = 'https://seasons-readhost.herokuapp.com/api';
//const BackendUrl = 'http://localhost:5006/api'

export async function fetchUpcomingGames(seasonId: string): Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    const rawGameDays = await fetchJson(BackendUrl, path);

    // @ts-ignore
    return rawGameDays.map(g => new GameDay(g.matchups.map(m => new Matchup(m.homeTeamName, m.guestTeamName))));
}