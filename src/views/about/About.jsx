import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import ExpandAbout from './components/ExpandAbout';
import CVButton from './components/CVButton';
import Stack from './components/Stack';
import ResponsiveAboutCard from 'components/AboutCard';

import { useTranslation } from 'context/LangWrapper/useTranslation';

const Left = styled.div`
  color: ${(p) => p.theme.palette.text.primary};
  /* background-color: blue; */
  /* height: 100%; */
  /* padding: 1rem; */
  text-align: center;
`;

const Right = styled.div`
  padding: 1rem;
  /* background-color: ${(p) => p.theme.palette.background.paper}; */
  /* height: 100%; */
  color: ${(p) => p.theme.palette.text.primary};
`;

const FullPaper = styled(Paper)`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
const Color = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

function About() {
  const {
    About: {
      descriptionTitle,
      description,
      stackTitle,
      stackSubTitle,
      downloadCVBtn,
      viewCVBtn,
      aboutCards,
    },
  } = useTranslation();
  return (
    <>
      <Grid item xs={12} md={8}>
        <Box textAlign="center">
          <Typography variant="h6">{description}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          flexGrow={1}
          flexWrap="wrap"
        >
          <CVButton text={downloadCVBtn} icon="download" />
          <CVButton text={viewCVBtn} icon="view" />
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {aboutCards.map((card, idx) => (
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={4}
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <ResponsiveAboutCard key={idx} text={card.text} icon={card.icon} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography variant="h4">{stackTitle}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {stackSubTitle}
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Stack />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <ExpandAbout />
      </Grid>
    </>

    //     <Grid item>
    //       <Box textAlign="center">
    //         <Typography variant="h4">{stackTitle}</Typography>
    //         <Typography variant="subtitle1" gutterBottom>
    //           {stackSubTitle}
    //         </Typography>
    //       </Box>
    //     </Grid>
    //   <Stack />
    //   </Grid> */}
    //   {/* <ExpandAbout /> */}
    // </Grid>
  );
}

export default About;
