import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';


const useStyles = makeStyles(() => ({
    root: {}
}));

function About() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="About"
        >
            About
        </Page>
    );
}

export default About;
