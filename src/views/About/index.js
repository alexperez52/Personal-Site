import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../About/Content';
import Contact from '../Home/Contact';


const useStyles = makeStyles(() => ({
    root: {}
}));

function About() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Alexis | About"
        >
            <Content />
            <Contact />
        </Page>
    );
}

export default About;
