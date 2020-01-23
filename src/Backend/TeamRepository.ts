import {fetchJson, sendJson} from "./RepositoryBase";
import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";


const ReadURl = process.env.TEAMS_READHOST;
const WriteUrl = process.env.TEAMS_HOST;

export async function fetchTeamCall(teamId: string): Promise<FullTeam> {
    // @ts-ignore
    return await fetchJson(ReadURl, "/Teams/" + teamId + "/full")
}

export async function fetchRacesCall(): Promise<Race[]> {
    // @ts-ignore
    return await fetchJson(ReadURl, "/Races")
}

export async function buyPlayer(teamId: string, playerTypeId: string, teamVersion: number) {
    const body = { playerTypeId, teamVersion };
    // @ts-ignore
    return await sendJson(WriteUrl, "/Teams/" + teamId + "/buy-player", body)
}