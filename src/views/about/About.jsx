import React from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import ExpandAbout from './components/ExpandAbout';
import { useTranslation } from 'context/LangWrapper/useTranslation';

const FullDiv = styled.div`
  width: 100%;
  position: relative;
`;

const Left = styled.div`
  /* background-color: blue; */
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
      <Grid item xs={10} md={7}>
        <Paper variant="outlined" elevation={5}>
          <Left>
            <Typography>{description}</Typography>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              pt={5}
            >
              <Button variant="contained" color="primary">
                {downloadCVBtn}
              </Button>
              <Button variant="contained" color="secondary">
                {viewCVBtn}
              </Button>
            </Box>
          </Left>
        </Paper>
      </Grid>
      <Grid item xs={10} md={5}>
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
