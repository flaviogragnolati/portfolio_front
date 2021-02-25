import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';

import ProjectCard from './components/ProjectCard';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const StyledCarousel = styled(CarouselProvider)`
  background-color: blue;
  width: 100%;
`;

function Projects() {
  return (
    <>
      {/* <h1>
        Project carrousel with hover effect and some detail, onClick modal?>
      </h1>
      Looking for a custom job? Click here to contact me! 👋 */}
      {/* <ProjectCard /> */}
      <StyledCarousel
        naturalSlideWidth={3}
        naturalSlideHeight={1}
        totalSlides={3}
        infinite={true}
        visibleSlides={1}
      >
        <Slider>
          <Slide index={0}>
            <ProjectCard />
          </Slide>
          <Slide index={1}>
            <ProjectCard />
          </Slide>
          <Slide index={2}>
            <ProjectCard />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup />
        {/* <ProjectCard /> */}
      </StyledCarousel>
    </>
  );
}

export default Projects;
