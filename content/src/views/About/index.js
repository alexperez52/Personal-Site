import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../About/Content';


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
            <Content />
        </Page>
    );
}

export default About;
