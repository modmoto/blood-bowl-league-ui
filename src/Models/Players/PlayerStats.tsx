export class PlayerStats {
    movement: number;
    strength: number;
    agility: number;
    armor: number;

    constructor(movement: number, strength: number, agility: number, armor: number) {
        this.movement = movement;
        this.strength = strength;
        this.agility = agility;
        this.armor = armor;
    }
}