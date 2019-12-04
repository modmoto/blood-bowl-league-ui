export class Matchup {

    constructor(homeTeamName: string, guestTeamName: string) {
        this.HomeTeamName = homeTeamName;
        this.GuestTeamName = guestTeamName;
    }

    HomeTeamName: string;
    GuestTeamName: string;
}