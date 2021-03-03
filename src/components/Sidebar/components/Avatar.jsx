import React from 'react';
import { Avatar as MuiAvatar } from '@material-ui/core';
import perfil from 'assets/img/perfil.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function Avatar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiAvatar
        variant="rounded"
        alt="foto de perfil"
        src={perfil}
        className={classes.large}
      />
    </div>
  );
}

export default Avatar;
