import React, { useCallback, useEffect, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import shared from 'assets/lang/shared';

import { indigo, grey, orange } from '@material-ui/core/colors';

import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import styled from 'styled-components';

const Frame = styled.div`
  border: 2px red solid;
  border-right: 0px transparent;
`;

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
  deterministic: true,
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

function Skills() {
  const [mobile, tablet, desktop] = useScreenSize();
  const { width, height } = useWindowDimensions();
  const {
    Skills: { subtitle, langSpecificSkills },
    techSkills,
  } = useTranslation();

  // const resize = (size, mobile, tablet, desktop) => {
  //   let memoSize;

  //   if (desktop || tablet.high) {
  //     memoSize = undefined;
  //   } else if (mobile || tablet.low) {
  //     memoSize = [width - 0.15 * width, height - 0.08 * height];
  //   }
  //   return memoSize;
  // };
  // const resizeCb = useCallback(resize, [height, width]);

  // const memoSize = useMemo(() => resizeCb(mobile, tablet, desktop), [
  //   mobile,
  //   tablet,
  //   desktop,
  //   resizeCb,
  // ]);

  let size;
  // useEffect(() => {
  //   const calcSize = () => {
  //     if (desktop || tablet.high) {
  //       size = undefined;
  //     } else if (mobile || tablet.low) {
  //       size = [width - 0.15 * width, height - 0.08 * height];
  //     }
  //     console.log('RUN EVERY 5 seg');
  //   };
  //   const calcSizeInterval = setInterval(calcSize(), 5000);
  //   return () => clearInterval(calcSizeInterval);
  // }, []);

  if (desktop || tablet.high) {
    size = undefined;
  } else if (mobile || tablet.low) {
    size = [width - 0.15 * width, height - 0.08 * height];
  }
  const words = [...techSkills, ...langSpecificSkills].slice(0, 20);
  return (
    <Grid item xs={12}>
      <ReactWordcloud size={size} words={techSkills} options={options} />
    </Grid>
    //    <Grid item xs={12}>
    //   <Typography variant="subtitle1" gutterBottom>
    //     {subtitle}
    //   </Typography>
    // </Grid>
  );
}

export default Skills;
