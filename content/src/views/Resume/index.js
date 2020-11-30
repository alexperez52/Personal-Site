import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../Resume/Content';

const useStyles = makeStyles(() => ({
    root: {}
}));

function Resume() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Alexis | Resume"
        >
            <Content />
        </Page>
    );
}

export default Resume;
