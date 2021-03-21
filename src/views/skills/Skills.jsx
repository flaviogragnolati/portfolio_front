import React, { useCallback, useEffect, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import shared from 'assets/lang/shared';

import { indigo, grey, orange } from '@material-ui/core/colors';

import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import styled from 'styled-components';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';

const Frame = styled.div`
  border: 2px red solid;
  border-right: 0px transparent;
`;

function Skills() {
  // const { mobile, tablet, desktop, size } = useScreenSize();
  // const { width, height } = useWindowDimensions();
  const {
    Skills: { subtitle, langSpecificSkills },
    techSkills,
  } = useTranslation();

  const t = useFullTheme();
  // let divSize;
  // if (desktop || tablet.high) {
  //   divSize = undefined;
  // } else if (mobile || tablet.low) {
  //   const s = [
  //     size.width - 0.15 * size.width,
  //     size.height - 0.08 * size.height,
  //   ];
  //   divSize = [Math.max(...s), Math.min(...s)];
  // }

  const options = {
    colors: [
      indigo[300],
      indigo[700],
      orange['A200'],
      orange['A700'],
      grey[400],
      // t.palette.primary.light,
      // t.palette.primary.dark,
      // t.palette.secondary.light,
      // t.palette.secondary.dark,
      // t.palette.grey['400'],
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

  const words = [...techSkills, ...langSpecificSkills].slice(0, 20);
  return (
    <Grid item xs={12}>
      <ReactWordcloud
        // size={divSize}
        words={techSkills}
        options={options}
      />
    </Grid>
  );
}

export default Skills;
