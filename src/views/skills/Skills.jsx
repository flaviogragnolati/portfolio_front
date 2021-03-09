import React from 'react';
import VerticalTabs from 'components/Tabs/VerticalTabs';
import MobileTabs from 'components/Tabs/MobileTabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BarGraph from './components/BarGraph';
import { Grid } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import shared from 'assets/lang/shared';
import { defaults } from 'utils/config';
import { indigo, grey, orange } from '@material-ui/core/colors';
const {
  colors: { primary, secondary, success, info, error },
} = defaults;

function Skills() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  let tabs;

  if (mobile) {
    tabs = <MobileTabs />;
  } else {
    tabs = <VerticalTabs techSkills={<BarGraph />} />;
  }

  const options = {
    // colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    colors: [
      indigo[300],
      // indigo[500],
      indigo[700],
      orange['A200'],
      // orange['A400'],
      orange['A700'],
      grey[400],
    ],
    enableOptimizations: true,
    enableTooltip: false,
    deterministic: false,
    padding: 3.5,
    fontFamily: 'sans-serif',
    fontSizes: [20, 65],
    fontStyle: 'normal',
    fontWeight: 'normal',
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
    rotations: 0,
    rotationAngles: [-25, 25],
  };

  const callbacks = {
    // getWordColor: (word) => (word.value > 50 ? 'blue' : 'red'),
  };

  return (
    <Grid item xs={12}>
      <ReactWordcloud
        words={shared.tech}
        options={options}
        callbacks={callbacks}
      />
    </Grid>
  );
}

export default Skills;
