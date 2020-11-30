import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Container,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import Hack from '../../theme/images';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        paddingTop: 50,
        paddingBottom: 20,
        [theme.breakpoints.down('md')]: {
            paddingTop: 60,
            paddingBottom: 60
        }
    },
    image: {
        perspectiveOrigin: 'left center',
        transformStyle: 'preserve-3d',
        perspective: 1500,
        '& > img': {
            maxWidth: '90%',
            height: 'auto',
            transform: 'rotateY(-35deg) rotateX(15deg)',
            backfaceVisibility: 'hidden',
            boxShadow: theme.shadows[16]
        }
    },
    shape: {
        position: 'absolute',
        top: 0,
        left: 0,
        '& > img': {
            maxWidth: '90%',
            height: 'auto'
        }
    },
    link: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 32
    },
}));


function Content({ className, ...rest }) {
    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={2}
                    direction='column'
                >

                    <Grid item container md={12} direction='row' >
                        <Grid item md={6}>
                            <Typography
                                color="textPrimary"
                                variant="h1"
                                className={classes.link}
                            >
                                A little bit about me ...
                        </Typography>
                            <Typography
                                variant="h3"
                                color="textSecondary">
                                I'm a Computer Science student with big ambitions. I really enjoy participating in Hackathons because
                                of the environment and the like minded programmers around me. I also enjoy problem solving and programming
                                challenges. I strive off competition but I do enjoy helping
                                others. I believe that working together with others is the best way to learn in this ever-evolving field.
                        </Typography>
                        </Grid>

                        <Grid item md={6} align="center" direction='column'>
                            <img src={Hack.Large.hack} alt="Hackathon" style={{ width: 300 }}></img>
                            <Typography color="textSecondary">
                                Picture of Winning Hackathon @CEWIT SBU
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.link}
                            fontWeight="bold"
                            variant="h2"
                            color="textSecondary"
                            align='center'>
                            Below you can find the programming languages and software that I use for development.
                        </Typography>
                    </Grid>

                    <Grid item container
                        direction='row'
                        md={12}
                        justify='space-around'>

                        <Grid item direction='column'
                            md={3}
                            xs={12}>
                            <Typography
                                variant="h3"
                                color="textPrimary">
                                Software
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary">
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        IntelliJ
                                    </li>

                                    <li>
                                        VS Code
                                    </li>

                                    <li>
                                        Vim
                                    </li>

                                    <li>
                                        Pycharm
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item direction='column'
                            md={3}
                            xs={12}
                        >
                            <Typography
                                variant="h3"
                                color="textPrimary">
                                Languages
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary">
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        Java
                                    </li>

                                    <li>
                                        Python
                                    </li>

                                    <li>
                                        Javascript
                                    </li>

                                    <li>
                                        HTML/CSS/XML
                                    </li>
                                    <li>
                                        SQL
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item direction='column'
                            md={3}
                            xs={12}>
                            <Typography
                                variant="h3"
                                color="textPrimary">
                                Frameworks / Libraries
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary">
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        Spring Boot
                                    </li>

                                    <li>
                                        React / Redux
                                    </li>

                                    <li>
                                        Node JS
                                    </li>
                                    <li>
                                        Scenebuilder
                                    </li>
                                    <li>
                                        Android Studio
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item direction='column'
                            md={3}
                            xs={12}
                        >
                            <Typography
                                variant="h3"
                                color="textPrimary">
                                Operating Systems
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary">
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        Windows
                                    </li>

                                    <li>
                                        Linux
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>


                    </Grid>



                </Grid>
            </Container>
        </div >
    );
}

Content.propTypes = {
    className: PropTypes.string
};

export default Content;
