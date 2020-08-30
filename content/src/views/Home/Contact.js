import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Images from '../../theme/images';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 0,
    paddingBottom: 0
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

  }
}));

function Features({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <hr size="2" />
        <br></br>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{ fontWeight: '600' }}
        >
          Connect with me !
        </Typography>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
            justify='center'
          >
            <Grid
              item
              xs={10}
              sm={6}
              md={3}

            >
              <Box display="flex"
                justifyContent='space-evenly'
              >
                <Avatar className={classes.avatar}>
                  <img
                    alt="icon"
                    style={{ width: 50 }}
                    src={Images.Logo.github}></img>
                </Avatar>
                <Avatar className={classes.avatar}>
                  <img
                    alt="icon"
                    style={{ width: 30 }}
                    src={Images.Logo.gmail}></img>
                </Avatar>
                <Avatar className={classes.avatar}>
                  <img
                    alt="icon"
                    style={{ width: 30 }}
                    src={Images.Logo.linkedin}></img>
                </Avatar>

                <Avatar className={classes.avatar}>
                  <img
                    alt="icon"
                    style={{ width: 50 }}
                    src={Images.Logo.instagram}></img>
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
