import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../Projects/Content';
import Contact from '../Home/Contact';

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
            <Content />
            <Contact />
        </Page>
    );
}

export default Projects;
