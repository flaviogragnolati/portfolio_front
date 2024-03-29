import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

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
          <Typography variant="h6" color="textPrimary">
            {description}
          </Typography>
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
        direction="row"
        justify="center"
        alignItems="stretch"
        // spacing={5}
      >
        {aboutCards.map((card, idx) => (
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            direction="row"
            justify="center"
            alignItems="stretch"
            // spacing={10}
            // alignContent="stretch"
          >
            <Box
              mt={5}
              mr={2}
              ml={2}
              display="flex"
              justifyContent="center"
              flexGrow={1}
            >
              <ResponsiveAboutCard
                key={idx}
                text={card.text}
                icon={card.icon}
              />
            </Box>
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
            <Typography variant="h4" color="textPrimary">
              {stackTitle}
            </Typography>
            {/* <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {stackSubTitle}
            </Typography> */}
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
  );
}

export default About;
