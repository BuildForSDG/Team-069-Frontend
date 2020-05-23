import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MenuIcon, EqualizerOutlined } from '@material-ui/icons';

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
    <AppBar position="static" className="nav">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <EqualizerOutlined />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          T-AHT
        </Typography>
        <div className="nav-btn">
          <Button variant="contained">Login</Button>
          <Button variant="contained" color="secondary">
            Sign up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default navBar;
