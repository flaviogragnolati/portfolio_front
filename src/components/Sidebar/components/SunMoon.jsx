import React, { forwardRef, useEffect } from 'react';

import { IconButton } from '@material-ui/core';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5TwoToneIcon from '@material-ui/icons/Brightness5TwoTone';
import NightsStayTwoToneIcon from '@material-ui/icons/NightsStayTwoTone';

import { useTheme } from 'context/ThemeWrapper/themeContext';

function SunMoon({ action, ...rest }, ref) {
  const [theme, toggleTheme] = useTheme();
  let themeButton;

  useEffect(() => {
    if (typeof action === 'function') {
      action(theme);
    }
  }, [theme, action]);

  if (theme === 'light') {
    themeButton = <NightsStayTwoToneIcon style={{ color: 'gray' }} {...rest} />;
  } else {
    themeButton = (
      <Brightness5TwoToneIcon style={{ color: 'yellow' }} {...rest} />
    );
  }
  return (
    <IconButton
      edge="start"
      color="inherit"
      onClick={() => toggleTheme()}
      ref={ref}
    >
      {themeButton}
    </IconButton>
  );
}

export default forwardRef(SunMoon);
