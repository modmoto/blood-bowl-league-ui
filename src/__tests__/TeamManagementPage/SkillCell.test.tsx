import React from 'react';
import renderer from 'react-test-renderer';
import {Skill} from "../../Models/Players/Skill";
import SkillCell from "../../TeamManagementPage/SkillCell";
import {green} from "@material-ui/core/colors";
import {mount} from "enzyme";
import {Box} from "@material-ui/core";

describe('SkillCell', () => {
    const startingSkills = [new Skill("Block")];
    const newSkills = ['Block', 'New_skill1', 'New_skill2'];

    it('snapshot renders', () => {
        const component = renderer.create(<SkillCell skills={newSkills} startingSkills={startingSkills}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has a the correct color for new skills', () => {
        const wrapper = mount(<SkillCell skills={newSkills} startingSkills={startingSkills}/>);
        const additionalSkillText = wrapper.find(Box).get(1);
        const additionalSkillsColor = additionalSkillText.props.color;
        const innerText = additionalSkillText.props.children;

        expect(additionalSkillsColor).toBe(green[600]);
        expect(innerText).toBe('skills.New_skill1, skills.New_skill2');
    });

    it('has a the correct color for old skills', () => {
        const wrapper = mount(<SkillCell skills={newSkills} startingSkills={startingSkills}/>);
        const oldSkillText = wrapper.find(Box).get(0);
        const oldSkillsColor = oldSkillText.props.color;
        const innerText = oldSkillText.props.children;

        expect(oldSkillsColor).toBeUndefined();
        expect(innerText).toBe('skills.Block');
    });
});