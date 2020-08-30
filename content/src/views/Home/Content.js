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
    CardMedia,
    Link,
    CardContent
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import Images from '../../theme/images';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: 30,
        paddingBottom: 30
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,

    },
    card: {
        width: 340,
    },
    media: {
        height: 200
    }
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
                    justify='space-evenly'
                    spacing={3}>
                    <Grid
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
                            to="/projects"
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
                                        image={Images.Cards.Projects}>


                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Projects
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my projects
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>


                    <Grid
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
                            to="/resume"
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
                                        image={Images.Cards.Resume}
                                    >

                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Resume
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my Resume
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>

                    <Grid
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
                            to="/about"
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
                                        image={Images.Cards.About}>

                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            About
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to read about me
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
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
