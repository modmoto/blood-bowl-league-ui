import {fetchJson, sendJson} from "./RepositoryBase";
import {FullTeam} from "../Models/Teams/FullTeam";

const ReadURl = 'https://teams-readhost.herokuapp.com/api';
const WriteUrl = 'https://teams-host.herokuapp.com/api';
//const ReadURl = 'http://localhost:5000/api'
//const WriteUrl = 'http://localhost:5001/api'

export async function fetchTeamCall(teamId: string): Promise<FullTeam> {
    return await fetchJson(ReadURl, "/Teams/" + teamId + "/full")
}

export async function fetchRacesCall() {
    return await fetchJson(ReadURl, "/Races")
}

export async function buyPlayer(teamId: string, playerTypeId: string, teamVersion: number) {
    const body = { playerTypeId, teamVersion };
    return await sendJson(WriteUrl, "/Teams/" + teamId + "/buy-player", body)
}