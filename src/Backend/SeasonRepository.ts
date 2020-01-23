import {fetchJson} from "./RepositoryBase";
import {GameDay} from "../Models/Seasons/GameDay";

const BackendUrl = process.env.SEASONS_READHOST;

export async function fetchUpcomingGames(seasonId: string): Promise<GameDay[]> {
    let path = "/Seasons/" + seasonId + "/gameDays";
    // @ts-ignore
    return await fetchJson(BackendUrl, path)
}