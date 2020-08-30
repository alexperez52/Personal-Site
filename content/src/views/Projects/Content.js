import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Container,
    Grid,
    Typography,
    makeStyles,
    Card,
    CardActionArea,
    Collapse,
    CardMedia,
    CardContent,
    SideBar
} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Images from '../../theme/images';
import LinkIcon from '@material-ui/icons/Link';

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
        marginTop: 10,
        width: 500
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
                <Grid container spacing={0}>
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

                            Below are only some of the projects that I have made. I only included the ones with the most
                            robust functionality.
                            <hr />
                        </Typography>
                    </Grid>
                    <Grid container item
                        justify='space-evenly'>
                        <Grid
                            item
                            container
                            justify='center'
                            md={4}
                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Ediboo"
                                    subheader="Kitchen Delivery Service"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.Ediboo}
                                    title="Ediboo"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a similar service to Uber Eats. Users can register as a Customer, Restaurant
                                        Owner or Driver.
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
                                    <IconButton aria-label="Github Repo">
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
                            md={4}
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
                                    <img src={Images.Cards.Clay} style={{ width: 500, height: 300 }} />
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a Smart Text Editor that uses different data structures to analyze
                                        and manipulate text. Supports Spell check and Markov Chain text Generation.
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Java FX, HashMap, LinkedList
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo">
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
                            md={4}
                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Prodict"
                                    subheader="Machine Learning Project"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.Prodict}
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
                                        Python, Bootstrap, Flask
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo">
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
                            md={4}
                            xs={12}>

                            <Card className={classes.card}>
                                <CardHeader
                                    title="Clay"
                                    subheader="Text Editor Desktop Application"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Images.Cards.Clay}
                                    title="Clay"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This is a Smart Text Editor that uses different data structures to analyze
                                        and manipulate text. Support Spell check and Markov Chain text Generation.
                                        <hr size="1" />
                                        <br />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Java FX, HashMap, LinkedList
                                    </Typography>

                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="Github Repo">
                                        <GitHubIcon style={{ marginRight: 5, marginTop: -5 }} />
                                        <Typography variant="body1" color="textSecondary" >
                                            Github Repo
                                        </Typography>
                                    </IconButton>

                                    <IconButton
                                        href="https://www.youtube.com/watch?v=8aA9wUFSjmY" target="_blank" rel="noopener noreferrer"
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
                </Grid>

            </Container>
        </div >
    );
}

Content.propTypes = {
    className: PropTypes.string
};

export default Content;
