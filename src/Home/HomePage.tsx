import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10, 0, 6),
    }
}));

function Home() {
    const { t } = useTranslation();

    const classes = useStyles();

    return (
    <Container maxWidth="sm" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {t('homePage.Title')}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {t('homePage.SubTitle')}
        </Typography>
    </Container>
    )
}

export default Home;