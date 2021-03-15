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
import useScreenSize from 'utils/useScreenSize';
import useWindowDimensions from 'utils/useWindowDimensions';

function Projects() {
  const {
    Projects: { endphrase, projects },
  } = useTranslation();

  return (
    <>
      <Grid item container>
        <ProjectCarrousel projects={projects} />
        {/* <StyledCarousel
          naturalSlideWidth={slideWidth}
          naturalSlideHeight={slideHeight}
          totalSlides={projects.length}
          infinite={true}
          visibleSlides={1}
        >
          <Slider>
            {projects.map((project, idx) => (
              <Slide index={idx}>
                <ResponsiveProjectCard
                  project={project}
                  screenType={screenType}
                />
              </Slide>
            ))}
          </Slider>
          <StyledBack />
          <StyledNext />
        </StyledCarousel> */}
        {/* <br /> */}
        {/* <Typography color="inherit" variant="body1" gutterBottom>
        {endphrase}
      </Typography> */}
      </Grid>
      <Grid container item xs={12}>
        <EndPhrase text={endphrase} />
      </Grid>
      <Box dispaly="flex" flexGrow={1}>
        <EndPhrase text={endphrase} />
      </Box>
      <Grid item xs={12}>
        <EndPhrase text={endphrase} />
      </Grid>
    </>
  );
}

export default Projects;
