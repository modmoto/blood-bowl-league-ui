import {fetchJson, sendJson} from "./RepositoryBase";

//const ReadURl = 'https://teams-readhost.herokuapp.com/api'
//const WriteUrl = 'https://teams-host.herokuapp.com/api'
const ReadURl = 'http://localhost:5000/api'
const WriteUrl = 'http://localhost:5001/api'

export async function fetchTeamCall(teamId) {
    return await fetchJson(ReadURl, "/Teams/" + teamId + "/full")
}

export async function fetchRacesCall() {
    return await fetchJson(ReadURl, "/Races")
}

export async function buyPlayer(teamId, playerTypeId, teamVersion) {
    const body = { playerTypeId, teamVersion };
    return await sendJson(WriteUrl, "/Teams/" + teamId + "/buy-player", body)
}