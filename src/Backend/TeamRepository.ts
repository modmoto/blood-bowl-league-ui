import {fetchJson, sendJson} from "./RepositoryBase";
import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";


const ReadURl = 'http://h2865571.stratoserver.net:5000/api';
const WriteUrl = 'http://h2865571.stratoserver.net:6001/api';

export async function fetchTeamCall(teamId: string): Promise<FullTeam> {
    return await fetchJson(ReadURl, "/Teams/" + teamId + "/full")
}

export async function fetchRacesCall(): Promise<Race[]> {
    return await fetchJson(ReadURl, "/Races")
}

export async function buyPlayer(teamId: string, playerTypeId: string, teamVersion: number) {
    const body = { playerTypeId, teamVersion };
    return await sendJson(WriteUrl, "/Teams/" + teamId + "/buy-player", body)
}