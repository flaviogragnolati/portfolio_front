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
  useTheme,
} from '@material-ui/core';

// MUI Icons
import MenuIcon from '@material-ui/icons/Menu';

// Custom components and hooks
import SidebarItem from 'components/sidebar/components/SidebarItem';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import LangPicker from 'components/LangPicker';
import SunMoon from 'components/SunMoon/SunMoon';

const SidebarDiv = styled.div`
  background-color: darkblue;
  width: 300px;
  height: 100vh;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState('home');

  const {
    Sidebar: { content, logo },
  } = useTanslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        pt={5}
      >
        <SunMoon />
        <LangPicker />
      </Box>
      <Divider />
      <List>
        {content.map((item, idx) => (
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
    </div>
  );
  return (
    <>
      <CssBaseline />
      <AppBar color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="main navigation bar">
        <Hidden smUp implementation="js">
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
        <Hidden xsDown implementation="js">
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
