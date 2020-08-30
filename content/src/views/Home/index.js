import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Hero from './Hero';
import Contact from './Contact';
import Content from './Content';

const useStyles = makeStyles(() => ({
    root: {}
}));

function Home() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Alexis | Home"
        >
            <Hero />
            <Content />
        </Page>
    );
}

export default Home;
