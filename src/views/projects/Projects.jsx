import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import EndPhrase from './components/EndPhrase';
import ProjectCarrousel from './components/ProjectCarrousel';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import ResponsiveProjectCard from 'components/ProjectCard';
import useWindowDimensions from 'utils/useWindowDimensions';

function Projects() {
  const {
    Projects: { endphrase, projects },
  } = useTranslation();

  return (
    <>
      <Grid item container>
        <ProjectCarrousel projects={projects} />
      </Grid>
      <Grid container item xs={12}>
        <EndPhrase text={endphrase} />
      </Grid>
    </>
  );
}

export default Projects;
