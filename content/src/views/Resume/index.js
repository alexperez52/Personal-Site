import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';


const useStyles = makeStyles(() => ({
    root: {}
}));

function Resume() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Resume"
        >
            Resume
        </Page>
    );
}

export default Resume;
