import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';


const useStyles = makeStyles(() => ({
    root: {}
}));

function Home() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Home"
        >
            Home
        </Page>
    );
}

export default Home;
