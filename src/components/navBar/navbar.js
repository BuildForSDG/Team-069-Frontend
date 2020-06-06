import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Menu, EqualizerOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const navBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [extendList, setExtendList] = useState(false);
  const [signedIn, setSignIn] = useState(false)
  const list = [
    {main: 'Awareness/Sensitization'},
    {main: 'Human Trafficking', sub: ['Events','News','Information Analysis']},
    {main: 'Psychoanalysis'},
    {main: 'Send a Message', sub: ['Talk to Someone','Emergency Only Call']},
    signedIn && {main: 'Start A Conversation'}
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (list) => (event, isExtended) => {
    setExtendList(extendList===list ? false : list);
  };

  return (
    <div>
    <AppBar position="static" className="nav">
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        <Typography variant="h6" className={classes.title}>
          T-AHT
        </Typography>
        <div>
          <Link to="/login" className="nav-btn">
            <Button variant="contained">Login</Button>
          </Link>
          <Link to="/signup" className="nav-btn">
            <Button variant="contained" color="secondary">
              Sign up
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    <SwipeableDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

       <List>
      {list.map((text, index) => (
        <>
      <ListItem button onClick={handleClick(`list${index}`)}>
        <ListItemText primary={text.main} />
        {text.sub && (extendList===`list${index}` ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {text.sub && (<Collapse in={extendList===`list${index}`} timeout="auto" unmountOnExit>
      {text.sub.map((text, index)=>(<List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary={text} />
          </ListItem>
        </List>))}
      </Collapse>)}
      </>
      ))}
      </List>
      </SwipeableDrawer>
    </div>
  );
};

export default navBar;
