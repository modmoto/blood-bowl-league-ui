import React, {FunctionComponent} from "react";
import {useTranslation} from "react-i18next";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import {Skill} from "../Models/Players/Skill";

const SkillCell:FunctionComponent<{startingSkills: Skill[], skills: string[]}> = ({ startingSkills, skills }) => {
    const { t } = useTranslation();

    const startingSkillIds = startingSkills.map(s => s.skillId);
    const additionalSkills = skills.filter(s => startingSkillIds.indexOf(s) < 0);
    const startingSkillString = startingSkills.map(s => t("skills." + s.skillId)).join(', ');
    const additionalSkillString = additionalSkills.map(s => t("skills." + s)).join(', ');
    return(
        <>
            <Box>
                {startingSkillString}
            </Box>
            <Box color={green[600]}>
                {additionalSkillString}
            </Box>
        </>
    )
}

export default (SkillCell)