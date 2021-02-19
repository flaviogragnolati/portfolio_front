import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import SidebarItem from './components/SidebarItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer:
    // {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
    {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.main,
  },
  // necessary for content to be below app bar
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'blue',
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();
  const {
    Sidebar: { content, logo },
  } = useTanslation();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {content.map((item, idx) => (
            <SidebarItem key={idx} icon={item.icon} text={item.text} />
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
