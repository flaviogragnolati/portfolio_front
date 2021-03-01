import React from 'react';
import VerticalTabs from './components/VerticalTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function ResponsiveTabs() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  let tabs;

  if (mobile) {
    tabs = <h1>asdasdasd</h1>;
  } else {
    tabs = <VerticalTabs />;
  }

  return <>{tabs}</>;
}

export default ResponsiveTabs;
