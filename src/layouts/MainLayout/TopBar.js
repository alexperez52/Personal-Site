import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    Divider,
    Toolbar,
    Link,
    makeStyles
} from '@material-ui/core';
import Settings from './Settings';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    toolbar: {
        height: 64
    },
    logo: {
        marginRight: theme.spacing(2)
    },
    link: {
        fontWeight: theme.typography.fontWeightBold,
        '& + &': {
            marginLeft: theme.spacing(3)
        },
        fontSize: 18,
    },
    divider: {
        width: 1,
        height: 32,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    }
}));

function TopBar({ className, ...rest }) {
    const classes = useStyles();

    return (
        <AppBar
            className={clsx(classes.root, className)}
            color="default"
            {...rest}
        >
            <Toolbar className={classes.toolbar}>
                <RouterLink to="/">

                </RouterLink>

                <Box flexGrow={1} />
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/"
                    underline="none"
                    variant="body2"
                >
                    Home
        </Link>
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/about"
                    underline="none"
                    variant="body2"
                >
                    About
        </Link>
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/projects"
                    underline="none"
                    variant="body2"
                >
                    Projects
        </Link>
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/resume"
                    underline="none"
                    variant="body2"
                >
                    Resume
        </Link>
                <Settings />

                <Divider className={classes.divider} />

            </Toolbar>
        </AppBar>
    );
}

TopBar.propTypes = {
    className: PropTypes.string
};

export default TopBar;
