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
<<<<<<< HEAD
                    spacing={5}
                    direction='column'
                >

                    <Grid item container md={12} direction='row' justify='space-between'>
                        <Grid item md={3}>
=======
                    spacing={2}
                    direction='column'
                >

                    <Grid item container md={12} direction='row' >
                        <Grid item md={6}>
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            <Typography
                                color="textPrimary"
                                variant="h1"
                                className={classes.link}
                            >
<<<<<<< HEAD
                                Career & Interests
=======
                                A little bit about me ...
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                        </Typography>
                            <Typography
                                variant="h3"
                                color="textSecondary">
<<<<<<< HEAD
                                I'm a Computer Science student with an interest in working with
                                data tooling and micro service development. I really enjoy participating in Hackathons because
                                of the environment and collaboration. I believe that working together with others is the best way to 
                                learn in this ever-evolving field.
                        </Typography>
                        </Grid>

                        <Grid item md={3} align="center" direction='column'>
                            <img src={Hack.Large.hack} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                            <Typography color="textSecondary">
                                Picture @CEWIT SBU Hackathon
                            </Typography>
                            
                        </Grid>
                         <Grid item md={3} align="center" direction='column'>
                            <img src={Hack.Large.sbuhacks} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                            <Typography color="textSecondary">
                                Picture @SBU Hacks
                            </Typography>
                            
=======
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
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
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
<<<<<<< HEAD
                                    <li>
                                        Golang
                                    </li>
=======

>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
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
<<<<<<< HEAD
                                    <li>
                                        MacOS
                                    </li>
=======
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                                </ul>
                            </Typography>
                        </Grid>


                    </Grid>

<<<<<<< HEAD
                    <Grid item>
                    <hr size="1" />
                    <br></br>
                        <Typography className={classes.link}
                            fontWeight="bold"
                            variant="h3"
                            color="textPrimary"
                            align='center'>
                            Some more about me
                        </Typography>
                    </Grid>
                   
                        <Typography 
                            variant="h3"
                            color="textSecondary"
                            align='center'>
                            On my free time I like creating and editing Youtube videos. I also enjoy going to the gym 
                            and hanging out with friends. I appreciate good food and cool scenery.
                            
                             Here are some pictures of places
                            that I have traveled to. 
                        </Typography>
                    <Grid item container md={12} spacing={4} alignContent="space-evenly" justify="space-evenly">
                   
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.miraflores} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Miraflores, Peru
                            </Typography>
                    </Grid>
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.hangzhou1} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Hangzhou, China - Mountain top
                            </Typography>
                    </Grid>
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.hangzhou2} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Hangzhou, China - Hotel
                            </Typography>
                    </Grid>
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.hangzhou3} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Hangzhou, China - Attractions
                            </Typography>
                    </Grid>
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.shanghai1} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Shanghai, China - Shanghai Tower
                            </Typography>
                    </Grid>
                
                    <Grid item md={4} align="center">
                    <img src={Hack.Large.shanghai3} alt="Hackathon" style={{ width: 300, height: 350 }}></img>
                    <Typography color="textPrimary">
                                Hangzhou, China - Boat
                            </Typography>
                    </Grid>
                 
                </Grid>
=======

>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7

                </Grid>
            </Container>
        </div >
    );
}

Content.propTypes = {
    className: PropTypes.string
};

export default Content;
