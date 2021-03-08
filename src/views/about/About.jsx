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

function About() {
  const {
    About: {
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
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="stretch"
        xs={12}
        md={4}
      >
        <Grid container item xs={10} sm={8} md={12}>
          <CVButton text={downloadCVBtn} icon="download" />
        </Grid>
        <Grid container item xs={10} sm={8} md={12}>
          <CVButton text={viewCVBtn} icon="view" />
        </Grid>
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
            direction="row"
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
          sm={10}
          md={8}
          lg={10}
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
