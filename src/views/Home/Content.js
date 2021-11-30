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
import WebIcon from '@material-ui/icons/Web';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FaceIcon from '@material-ui/icons/Face';
import { Link as RouterLink } from 'react-router-dom'

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
<<<<<<< HEAD
                                            <Grid
=======
                    <Grid
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
<<<<<<< HEAD
                            to="/about"
=======
                            to="/projects"
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
                                    >
<<<<<<< HEAD
                                        <FaceIcon style={{ height: 200, width: 340 }} />
=======
                                        <WebIcon style={{ height: 200, width: 340 }} />

>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7

                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
<<<<<<< HEAD
                                            About
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to read about me
=======
                                            Projects
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my projects
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
<<<<<<< HEAD
=======


>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                    <Grid
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
<<<<<<< HEAD
                            to="/projects"
=======
                            to="/resume"
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
<<<<<<< HEAD
                                    >
                                        <WebIcon style={{ height: 200, width: 340 }} />

=======

                                    >
                                        <AssignmentIndIcon style={{ height: 200, width: 340 }} />
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7

                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
<<<<<<< HEAD
                                            Projects
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my projects
=======
                                            Resume
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my Resume
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>

<<<<<<< HEAD

=======
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                    <Grid
                        item
                        container
                        justify='center'
                        md={4}
                        xs={12}>
                        <Link
                            component={RouterLink}
<<<<<<< HEAD
                            to="/resume"
=======
                            to="/about"
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            underline="none"
                        >
                            <Card className={classes.card}>
                                <CardActionArea >
                                    <CardMedia className={classes.media}
<<<<<<< HEAD

                                    >
                                        <AssignmentIndIcon style={{ height: 200, width: 340 }} />
=======
                                    >
                                        <FaceIcon style={{ height: 200, width: 340 }} />
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7

                                    </CardMedia>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
<<<<<<< HEAD
                                            Resume
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to view my Resume
=======
                                            About
                            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Click here to read about me
>>>>>>> 63d6fae6046dade64e325347ff2bcc5a7f560dc7
                            </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
<<<<<<< HEAD


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
