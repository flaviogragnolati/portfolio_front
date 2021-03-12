import React, { forwardRef, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
// MUI Core
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';

// MUI Icons
import MenuIcon from '@material-ui/icons/Menu';

// Custom components and hooks
import SidebarItem from './components/SidebarItem';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import LangPicker from './components/LangPicker';
import SunMoon from './components/SunMoon';
import Avatar from './components/Avatar';
import Footer from 'components/Footer';
import useScreenSize from 'utils/useScreenSize';
import CloseBtn from 'components/Sidebar/components/CloseBtn';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // appBar: {
  //   [theme.breakpoints.up('md')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.main,
  },
}));
function Sidebar({ spy }) {
  const {
    Sidebar: { index, logo },
  } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const [mobile, tablet, desktop] = useScreenSize();
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [current, setCurrent] = useState('home');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'set':
        return (state = action.payload);
      default:
        throw new Error('not a reducer action');
    }
  };
  const [currentSection, setCurrentSection] = useReducer(reducer, 'home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClose = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <>
      {/* <div className={classes.toolbar} /> */}
      {mobileOpen && <CloseBtn handleClose={handleClose} />}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        pt={mobileOpen ? 5 : 5}
        pl={1}
        pr={1}
        pb={1}
      >
        <Avatar />
        <Box
          display="flex"
          flexDirection="column"
          flexGrow="1"
          justifyContent="center"
          alignItems="flex-end"
        >
          <SunMoon />
          <LangPicker />
        </Box>
      </Box>
      <Divider />
      <List>
        {index.map((item, idx) => (
          <SidebarItem
            key={idx}
            item={item}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            spy={spy[item.id]}
          />
        ))}
        <Divider />
      </List>
      {!mobileOpen && (
        <Box
          display="flex"
          flexDirection="column"
          flexGrow="1"
          justifyContent="flex-end"
          alignItems="center"
          pb={5}
        >
          <Footer />
        </Box>
      )}
    </>
  );
  return (
    <>
      <CssBaseline />
      <AppBar
        color="transparent"
        elevation={0}
        // className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="main navigation bar">
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {sidebarContent}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="js">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open={false}
          >
            {sidebarContent}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default React.memo(Sidebar);
