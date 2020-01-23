import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/Seasons/GameDay";

const BackendUrl = 'http://seasons-readhost.blood-bowl-league.com/api';

export async function fetchUpcomingGames(seasonId: string): Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    return await fetchJson(BackendUrl, path)
}