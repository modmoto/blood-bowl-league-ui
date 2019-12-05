import {fetchJson, sendJson} from "./RepositoryBase";
import {FullTeam} from "../Models/Teams/FullTeam";
import {Race} from "../Models/Races/Race";
import {AllowedPlayer} from "../Models/Races/AllowedPlayer";
import {Skill} from "../Models/Players/Skill";
import {PlayerStats} from "../Models/Players/PlayerStats";

const ReadURl = 'https://teams-readhost.herokuapp.com/api';
const WriteUrl = 'https://teams-host.herokuapp.com/api';
//const ReadURl = 'http://localhost:5000/api'
//const WriteUrl = 'http://localhost:5001/api'

export async function fetchTeamCall(teamId: string): Promise<FullTeam> {
    return await fetchJson(ReadURl, "/Teams/" + teamId + "/full")
}

export async function fetchRacesCall(): Promise<Race[]> {
    const racesRaw = await fetchJson(ReadURl, "/Races");
    // @ts-ignore
    racesRaw.map(r => new Race(r.raceConfigId,
        // @ts-ignore
        r.allowedPlayers.map(a =>
            // @ts-ignore
            new AllowedPlayer(a.startingSkills.map(s => new Skill(s.skillId)), a.playerTypeId, a.goldCoins.value,
                new PlayerStats(a.playerStats.movement, a.playerStats.strength, a.playerStats.agility, a.playerStats.armor)))));
    return racesRaw
}

export async function buyPlayer(teamId: string, playerTypeId: string, teamVersion: number) {
    const body = { playerTypeId, teamVersion };
    return await sendJson(WriteUrl, "/Teams/" + teamId + "/buy-player", body)
}