import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const landingPage = () => {
  const classes = useStyles();
  return (
    <div className="about">
      <Typography variant="h3" className={classes.title}>
        #BuildforSDG Challenge 2020
      </Typography>
      <Typography variant="h6" className={classes.title} style={{ fontWeight: 'lighter' }}>
        T-AHT uniquely combats human trafficking in Nigeria and around the world, <br /> we expand and strengthen the
        network of human trafficking fighters and crusaders, <br /> through law enforcement agencies and other human
        trafficking stakeholders <br /> with highly valuable human trafficking information.
      </Typography>
      <Button variant="contained">
        Continue <ArrowForward style={{ marginLeft: '10px' }} />{' '}
      </Button>
    </div>
  );
};

export default landingPage;
