import React from 'react';
import VerticalTabs from 'components/Tabs/VerticalTabs';
import MobileTabs from 'components/Tabs/MobileTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Skills() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  let tabs;

  if (mobile) {
    tabs = <MobileTabs />;
  } else {
    tabs = <VerticalTabs />;
  }

  return <>{tabs}</>;
}

export default Skills;
