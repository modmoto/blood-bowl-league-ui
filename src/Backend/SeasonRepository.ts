import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/GameDay";

const BackendUrl = 'https://seasons-readhost.herokuapp.com/api';
//const BackendUrl = 'http://localhost:5006/api'

export async function fetchUpcomingGames(seasonId: string) : Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    return await fetchJson(BackendUrl, path)
}