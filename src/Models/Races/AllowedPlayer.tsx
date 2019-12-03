class Skill {
    skillId: string;
    constructor(skillId: string){
        this.skillId = skillId;
    }
}

export class AllowedPlayer {
    startingSkills: Skill[];
    playerTypeId: string;

    constructor(playerTypeId: string, startingSkills: Skill[]) {
        this.playerTypeId = playerTypeId;
        this.startingSkills = startingSkills;
    }
}