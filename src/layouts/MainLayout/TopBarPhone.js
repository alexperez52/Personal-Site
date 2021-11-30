import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Link,
    AppBar,
    Toolbar,
    makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import '../../assets/css/index.css'
import Images from '../../theme/images';
import Hamburger from '@material-ui/icons/Menu';
import Settings from './Settings';


const useStyles = makeStyles((theme) => ({

    background: {
        backgroundColor: 'black',
    },
    modal: {
        paddingLeft: 20,
        backgroundColor: 'black',
        height: '100%'
    },

    root: {
        backgroundColor: theme.palette.background.default
    },
    toolbar: {
        height: 64
    },
    mobileDrawer: {
        width: 256
    },
}));

function TopBarPhone({ className, ...rest }) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const content = (
        <Box flexDirection='column'
            display='flex'
            height='100%'
            alignContent='center'
            justifyContent='center'>
            <Box p={2}>
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
            </Box>
            <Box p={2}>
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
            </Box>
            <Box p={2}>
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
            </Box>
            <Box p={2}>
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
            </Box>
        </Box>
    )

    const list = (anchor) => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Drawer
                anchor="right"
                classes={{ paper: classes.mobileDrawer }}
                open={anchor}
                variant="temporary"
            >
                {content}
            </Drawer>


        </div >
    );
    return (
        <header id="topNavSmall">

            <AppBar
                className={clsx(classes.root, className)}
                color="default"
                {...rest}
            >

                <Toolbar className={classes.toolbar}>

                    <Box flexGrow={1}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Box flexGrow={1} display='flex'>
                                <img src={Images.Logo.Alex}
                                    style={{ height: 40 }} alt="logo"></img>
                                <Box color='red' fontSize='32px'
                                >
                                    lexis
                            </Box>
                            </Box>
                        </Link>
                    </Box>
                    <Box>
                        <Settings />
                    </Box>
                    <Box>

                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)} >
                                    <Hamburger />
                                </Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} classes={{ paper: classes.paper }} >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

        </header>
    )
}

export default TopBarPhone;