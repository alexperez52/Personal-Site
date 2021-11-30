import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Profile from '../../theme/images';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: theme.palette.background.dark,
    backgroundRepeat: 'no-repeat',
    paddingTop: 100,
    paddingBottom: 50,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  image: {
    marginLeft: 100,
    position: 'relative',
    perspectiveOrigin: 'left center',
    perspective: 1500,
    '& > img': {
      maxWidth: '80%',
      height: 'auto',
      backfaceVisibility: 'hidden',
    }
  },
  button: {
    backgroundColor: '#ff6469',
    padding: 10,
    width: 200
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={12}
          >
            
            <Box 
              display="flex"
              gridGap="40px"
            >

            <Box
              display="flex"
              alignItems='center'
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >

              <Typography
                variant="h1"
                color="textPrimary"
                style={{ fontSize: 50 }}
                align='center'
              >
                Hello, I am Alexis Perez-Mendoza
              </Typography>
              <Box mt={2}
                display="flex"
              >
                <Typography
                  align='center'
                  variant="body1"
                  style={{ fontSize: 25 }}
                  color="textSecondary"
                >
                  <Box display="inline" color="#ff6600">
                    Welcome
                  </Box> to my Personal Site. I'm a Junior studying Computer
                  Science at <Box color="#971a1f" display='inline'>
                    Stony Brook University 
                  </Box>
                  {" "}
                  and an aspiring Software Engineer.
                </Typography>
              </Box>
              {/* <Box mt={0}>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                  style={{ fontSize: 25 }}
                >
                  I have a passion for software development and mathematics. 
                </Typography>
              </Box> */}

            </Box>

            <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                >
              <img src={Profile.Large.prof} alt="Profile" style={{ width: 200, borderRadius:100 }}></img>

                </Grid>
              </Box>
        </Box>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
