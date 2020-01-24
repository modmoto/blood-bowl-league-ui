import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/Seasons/GameDay";

// @ts-ignore
const BackendUrl = window._env_.SEASONS_READHOST;

export async function fetchUpcomingGames(seasonId: string): Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    return await fetchJson(BackendUrl, path)
}