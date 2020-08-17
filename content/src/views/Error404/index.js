import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';


const useStyles = makeStyles(() => ({
    root: {}
}));

function Error404() {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Error"
        >
            Error 404
        </Page>
    );
}

export default Error404;
