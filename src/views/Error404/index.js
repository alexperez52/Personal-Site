import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from '../Error404/Content';


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
            <Content />
        </Page>
    );
}

export default Error404;
