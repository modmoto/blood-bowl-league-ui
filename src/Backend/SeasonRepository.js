import {fetchJson} from "./RepositoryBase";

export async function fetchUpcomingGames(seasonId) {
    return await fetchJson("/Seasons/" + seasonId + "/gameDays")
}