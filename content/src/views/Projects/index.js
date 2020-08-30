import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../Projects/Content';


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
        </Page>
    );
}

export default Projects;
