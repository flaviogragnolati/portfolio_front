import React, { forwardRef, useEffect, useState } from 'react';
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
import SocialContact from './components/SocialContact';
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
function Sidebar({ scrollAt, spy }, ref) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobile, desktop] = useScreenSize();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState('home');

  const {
    Sidebar: { index, logo },
  } = useTranslation();

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
            ref={ref[item.id]}
            key={idx}
            item={item}
            current={current}
            setCurrent={setCurrent}
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
            open
          >
            {sidebarContent}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default forwardRef(Sidebar);
