import {fetchJson} from "./RepositoryBase";

const BackendUrl = 'https://teams-readhost.herokuapp.com/api'

export async function fetchMyTeamCall(teamId) {
    return await fetchJson(BackendUrl, "/Teams/" + teamId + "/full")
}