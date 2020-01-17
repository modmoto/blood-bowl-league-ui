import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/Seasons/GameDay";

//const BackendUrl = 'http://localhost:5001/api';
const BackendUrl = 'http://h2865571.stratoserver.net/:5001/api';

export async function fetchUpcomingGames(seasonId: string): Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    return await fetchJson(BackendUrl, path)
}