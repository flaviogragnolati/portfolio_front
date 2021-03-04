import React from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import ExpandAbout from './components/ExpandAbout';
import CVButton from './components/CVButton';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const Left = styled.div`
  /* background-color: blue; */
  widht: 100%;
  height: 100%;
  padding: 1rem;
`;

const Right = styled.div`
  padding: 1rem;
  background-color: ${(p) => p.theme.palette.background.paper};
  height: 100%;
  color: ${(p) => p.theme.palette.text.primary};
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
    },
  } = useTranslation();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={12} md={7}>
        <Paper variant="outlined" elevation={5}>
          <Left>
            <Typography>{description}</Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              flexWrap="wrap"
              pt={5}
            >
              <CVButton text={downloadCVBtn} icon="download" />
              <CVButton text={viewCVBtn} icon="view" />
            </Box>
          </Left>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Right>
          {stackTitle}
          {stackSubTitle}
        </Right>
      </Grid>
      <ExpandAbout />
    </Grid>
  );
}

export default About;
