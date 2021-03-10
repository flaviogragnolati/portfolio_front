import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import { indigo, grey, orange } from '@material-ui/core/colors';

import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const options = {
  colors: [indigo[300], indigo[700], orange['A200'], orange['A700'], grey[400]],
  enableOptimizations: false,
  enableTooltip: false,
  deterministic: false,
  padding: 3.5,
  fontFamily: 'sans-serif',
  fontSizes: [20, 65],
  fontStyle: 'normal',
  fontWeight: 'normal',
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 10000,
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

  let size;
  if (desktop || tablet.high) {
    size = undefined;
  } else if (mobile || tablet.low) {
    size = [width - 0.15 * width, height - 0.08 * height];
  }
  return (
    <ReactWordcloud
      size={size}
      words={[...techSkills, ...langSpecificSkills]}
      options={options}
    />
  );
}

export default Skills;
