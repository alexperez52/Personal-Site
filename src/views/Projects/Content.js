import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Container,
    Grid,
    Typography,
    makeStyles,
    Card,
    CardMedia,
    CardContent,
    Box
} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Images from '../../theme/images';
import LinkIcon from '@material-ui/icons/Link';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        paddingTop: 30,
        paddingBottom: 30
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,

    },
    card: {
        margin: 10,
        width: 550,
        backgroundColor: theme.palette.secondary.main
    },
    media: {
        height: 300,
        width: '100%'

    },
    link: {
        fontWeight: theme.typography.fontWeightBold,
    },

}));

function Content({ className, ...rest }) {
    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid container item direction='column'>
                        <Typography
                            className={classes.link}
                            variant="h1"
                            color="textPrimary">

                            Projects
                    </Typography>
                        <Typography
                            className={classes.link}
                            variant="h3"
                            color="textSecondary"
                        >

                            Below are some of my projects with their respective GitHub links.
                            <hr />
                        </Typography>
                    </Grid>
                    <Grid container item
                        >
                            <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Load Balancer"
                                    subheader="Dynamic Target Allocation"
                                />
                                <CardMedia
                                    className={classes.media}
                                    style={{height: 0, paddingTop: '85%'}}
                                    image={Images.Cards.targetalloc}
                                    title="Allocator"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This was an internship project in which I worked on a dynamic target allocator for the
                                        Open-Telemetry Operator. This project enables robust support for StatefulSets.
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Back-End: Golang
                                    </Typography>
                                    
                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo"
                                    href="https://github.com/open-telemetry/opentelemetry-operator/pull/354" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>
                                    <IconButton
                                        href="https://docs.google.com/document/d/1GdpCqdkz72291l_8S-jio7EhVltminobvqshsFih6vA/edit#heading=h.d6w58tc6nq54" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <LinkIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            Design Document
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Ediboo"
                                    subheader="Kitchen Delivery Service"
                                />
                                <CardMedia
                                    className={classes.media}
                                    style={{height: 0, paddingTop: '85%'}}

                                    image={Images.Cards.Ediboo}
                                    title="Ediboo"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a similar service to Uber Eats. Users can register as a Customer, Restaurant
                                        Owner or Driver. Customers can order food, Restaurant owners can setup their shop and drivers
                                        can find customer orders to deliver. Financial records are also available through a dashboard.
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Front-End: React JS, HTML/CSS
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Back-End: Java Spring Boot, PostgreSQL, JWT
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo" 
                                    href="https://github.com/alexperez52/FullStack-Food-Delivery-Website" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>

                                    <IconButton
                                        href="https://www.youtube.com/watch?v=8aA9wUFSjmY" target="_blank" rel="noopener noreferrer"
                                    >
                                        <YouTubeIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            Video Demo
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>

                       
                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Prodict"
                                    subheader="Machine Learning Project"
                                    action={
                                        <Typography variant="body1"> 
                                            <Box color="orange" display="flex">
                                            Hackathon Winner!
                                            <StarIcon style={{marginLeft: 5, marginTop: -5}}/>

                                            </Box>
                                        </Typography>
                                    }
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.Prodict}
                                    style={{height: 0, paddingTop: '85%'}}

                                    title="Prodict"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Machine learning project that predicts the next NBA MVP based on
                                        previous MVP data. Uses Linear Regression, Random Forest Regression
                                        and Gradient Boosting Regression.
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Python, Bootstrap, Flask, Google Cloud
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo"
                                    href="https://github.com/alexperez52/CEWIT-Hackthon-Project" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>
                                    <IconButton
                                        href="https://mvp-prediction.appspot.com/" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <LinkIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            Project URL
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title="Clay"
                                    subheader="Text Editor Desktop Application"
                                />
                                <CardMedia
                                    className={classes.media}
                                    title="Clay"
                                >
                                    <img src={Images.Cards.Clay} style={{ width: 550, height: 300 }} alt="clay" />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a Smart Text Editor that uses different data structures to analyze
                                        and manipulate text. Supports Spell check and Markov Chain text Generation. Also contains
                                        a VERY accurate syllable counter using Regular Expressions. 
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Java FX, HashMap, LinkedList
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo"
                                    href="https://github.com/alexperez52/TextEditorV3" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>

                                    <IconButton
                                        href="#" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <YouTubeIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            Video Demo
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Sound Snowflake Visualization"
                                    subheader="Sound visualization project"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.Snow}
                                    title="Snowflake Sound Visualization"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Simulation of Snowfall's natural Phenomenon through the structured use of Mathematical models that function with Sound.
                                   
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Box color="orange">
                                        Suny Undergraduate Research Conference Submission.
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Faculty Mentor: Bin Li
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Javascript, p5.js library, HTML / CSS
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo"
                                    href="https://github.com/alexperez52/Sound-Fountain" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>

                                    <IconButton
                                        href="#" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <YouTubeIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            Video Demo
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container item direction='column'>
                        <Typography
                            className={classes.link}
                            variant="h1"
                            color="textPrimary">

                            Technical Communication Projects
                    </Typography>
                        <Typography
                            className={classes.link}
                            variant="h3"
                            color="textSecondary"
                        >
                            <hr />
                        </Typography>
                        <Grid container item direction='row' justify="space-evenly">

                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="User Instructions"
                                    subheader="Registering for Classes on Solar"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.UserInstructions}
                                    title="Snowflake Sound Visualization"
                                />
                                <CardContent>
                                <hr />
                                    <br/>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A simple user guide on how to register for classes on Stony Brook's solar system.
                                   
                                    </Typography>
                                    

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton
                                        href="https://docs.google.com/document/d/1TQe9pYTJ8dQ1GtT64_V-mJ63DhHQjNdnTZoTlkl4ECY/" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <LinkIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            PDF
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            container
                            justify='center'
                            lg={4}
                            md={12}
                            sm={12}

                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Press Release"
                                    subheader="Introduction to Git/Github"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.PressRelease}
                                    title="Press Release"
                                />
                                <CardContent>
                                    <hr />
                                    <br/>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A press release for a Stony Brook University event - Introduction to Git/Github workshop.
                                   
                                    </Typography>
                                    

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton
                                        href="https://docs.google.com/document/d/12oZQW5je3PnGGcAoOoT51e4ik4clpdOaIa_vMbkNYBU/" target="_blank" rel="noopener noreferrer"
                                        aria-label="show more"
                                    >

                                        <LinkIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary">
                                            PDF
                                        </Typography>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
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
