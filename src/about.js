import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

const navBar = () => {
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
    </div>
  );
};

export default navBar;
