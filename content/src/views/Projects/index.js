import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';


const useStyles = makeStyles(() => ({
    root: {}
}));

function Projects() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Projects"
        >
            Projects
        </Page>
    );
}

export default Projects;
