interface Matchup {
    homeTeamName: string;
    guestTeamName: string;
}

export interface GameDay {
    matchups: Matchup[];
}