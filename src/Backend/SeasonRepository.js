import {fetchJson} from "./RepositoryBase";

const BackendUrl = 'https://seasons-readhost.herokuapp.com/api'
//const BackendUrl = 'http://localhost:5006/api'

export async function fetchUpcomingGames(seasonId) {
    let path = "/Seasons/" + seasonId + "/gameDays";
    return await fetchJson(BackendUrl, path)
}