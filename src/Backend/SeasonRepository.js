import {fetchJson} from "./RepositoryBase";

const BackendUrl = 'https://seasons-readhost.herokuapp.com/api'

export async function fetchUpcomingGames(seasonId) {
    return await fetchJson(BackendUrl, "/Seasons/" + seasonId + "/gameDays")
}