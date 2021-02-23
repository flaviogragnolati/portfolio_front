import React, { useEffect } from 'react';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function BackToTopBtn() {
  const classes = useStyles();
  let homeDivHeight =
    document.getElementById('home') &&
    document.getElementById('home').offsetHeight;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: homeDivHeight / 2,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector('#top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div>
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </div>
  );
}

export default BackToTopBtn;
