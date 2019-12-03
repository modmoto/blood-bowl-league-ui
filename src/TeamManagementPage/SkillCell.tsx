import React, {FunctionComponent} from "react";
import {useTranslation} from "react-i18next";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import {Skill} from "../Models/Players/Skill";

const SkillCell:FunctionComponent<{startingSkills: Skill[], skills: string[]}> = ({ startingSkills, skills }) => {
    const { t } = useTranslation();

    var startingSkillIds = startingSkills.map(s => s.skillId);
    const additionalSkills = skills.filter(s => startingSkillIds.indexOf(s) < 0);
    const startingSkilltring = startingSkills.map(s => t("skills." + s.skillId)).join(', ');
    const additionalSkillstring = additionalSkills.map(s => t("skills." + s)).join(', ');
    return(
        <>
            <Box>
                {startingSkilltring}
            </Box>
            <Box color={green[600]}>
                {additionalSkillstring}
            </Box>
        </>
    )
}

export default (SkillCell)