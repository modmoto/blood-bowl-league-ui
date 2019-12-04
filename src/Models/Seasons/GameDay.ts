import {Matchup} from "./Matchup";

export class GameDay {

    constructor(matchups: Matchup[]) {
        this.Matchups = matchups;
    }

    Matchups: Matchup[];
}