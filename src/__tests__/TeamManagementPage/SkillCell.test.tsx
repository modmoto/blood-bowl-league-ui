import React from 'react';
import renderer from 'react-test-renderer';
import {Skill} from "../../Models/Players/Skill";
import SkillCell from "../../TeamManagementPage/SkillCell";

describe('SkillCell', () => {
    const startingSkills = [new Skill("Block")];
    const newSkills = ['Block', 'New_skill1', 'New_skill2'];

    it('snapshot renders', () => {
        const component = renderer.create(<SkillCell skills={newSkills} startingSkills={startingSkills}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});