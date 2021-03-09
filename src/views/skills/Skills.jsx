import React from 'react';
import { Grid } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import shared from 'assets/lang/shared';

import { indigo, grey, orange } from '@material-ui/core/colors';

import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';

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
  transitionDuration: 1500,
  rotations: 0,
  rotationAngles: [-25, 25],
};

const callbacks = {
  // getWordColor: (word) => (word.value > 50 ? 'blue' : 'red'),
};

function Skills() {
  const [mobile, tablet, desktop] = useScreenSize();
  const { width, height } = useWindowDimensions();
  let size;
  if (desktop || tablet.high) {
    size = undefined;
  } else if (mobile || tablet.low) {
    size = [width - 0.15 * width, height - 0.08 * height];
    console.log('size', size);
  }
  return (
    <Grid item xs={12}>
      <ReactWordcloud
        size={size}
        words={shared.tech}
        options={options}
        callbacks={callbacks}
      />
    </Grid>
  );
}

export default Skills;
