import React from "react";
import {withTranslation} from "react-i18next";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

function SkillCell(props) {
    const { startingSkills, skills, t} = props;
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

export default withTranslation()(SkillCell)