import React from 'react';
import renderer from 'react-test-renderer';
import PlayerRow from "../../TeamManagementPage/PlayerRow";
import {Player} from "../../Models/Players/Player";
import {PlayerConfig} from "../../Models/Players/PlayerConfig";
import {PlayerStats} from "../../Models/Players/PlayerStats";
import {Skill} from "../../Models/Players/Skill";

describe('PlayerRow', () => {

    const newSkills = ['Block', 'New_skill1', 'New_skill2'];
    const playerConfig = new PlayerConfig(new PlayerStats(7,3,4,8), [new Skill("Block")], 'HU_Blitzer');
    const player = new Player(playerConfig, newSkills, 0, 'HU_Blitzer');

    test('snapshot renders', () => {
        const component = renderer.create(<PlayerRow index={1} player={player}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});