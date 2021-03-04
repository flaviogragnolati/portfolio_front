import React from 'react';
import VerticalTabs from 'components/Tabs/VerticalTabs';
import MobileTabs from 'components/Tabs/MobileTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BarGraph from './components/BarGraph';

function Skills() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  let tabs;

  if (mobile) {
    tabs = <MobileTabs />;
  } else {
    tabs = <VerticalTabs techSkills={<BarGraph />} />;
  }

  return <>{tabs}</>;
}

export default Skills;
