import React from 'react';
import VerticalTabs from 'components/Tabs/VerticalTabs';
import MobileTabs from 'components/Tabs/MobileTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BarGraph from './components/BarGraph';
import { Grid } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import shared from 'assets/lang/shared';

function Skills() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  let tabs;

  if (mobile) {
    tabs = <MobileTabs />;
  } else {
    tabs = <VerticalTabs techSkills={<BarGraph />} />;
  }

  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: false,
    deterministic: false,
    padding: 3,
    fontFamily: 'impact',
    fontSizes: [20, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
    rotations: 1,
    rotationAngles: [0, 90],
  };

  return (
    <Grid item xs={12}>
      <ReactWordcloud words={shared.tech} options={options} />
    </Grid>
  );
}

export default Skills;
