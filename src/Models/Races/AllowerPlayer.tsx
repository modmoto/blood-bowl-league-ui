class Skill {
    skillId: string;
    constructor(skillId: string){
        this.skillId = skillId;
    }
}

export class AllowerPlayer {
    startingSkills: Skill[];
    playerTypeId: string;

    constructor(playerTypeId: string, startingSkills: Skill[]) {
        this.playerTypeId = playerTypeId;
        this.startingSkills = startingSkills;
    }
}