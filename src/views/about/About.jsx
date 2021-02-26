import React from 'react';
import styled from 'styled-components';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import MoreArrow from './components/MoreArrow';

const p = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            suscipit nisi vitae feugiat vestibulum. Aliquam porta nulla vel odio
            scelerisque, pretium volutpat dui euismod. Integer porttitor dolor
            placerat malesuada dictum. Fusce enim dolor, dignissim quis ornare
            at, elementum nec turpis. Donec ac interdum libero, sed condimentum
            lectus. Nunc nec iaculis tortor. Donec interdum sollicitudin eros in
            pharetra. Donec ultricies laoreet dictum. Maecenas vestibulum
            sodales justo, id hendrerit orci aliquet gravida. Nulla facilisi.`;

const FullDiv = styled.div`
  width: 100%;
  position: relative;
`;

const Left = styled.div`
  /* background-color: blue; */
  height: 100%;
`;

const Right = styled.div`
  background-color: red;
  height: 100%;
`;

function About() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={10} md={7}>
        <Paper elevation={5}>
          <Left>
            <Typography>{p}</Typography>
            <Button>Download CV</Button>
          </Left>
        </Paper>
      </Grid>
      <Grid item xs={10} md={5}>
        <Right>STACK</Right>
      </Grid>
      <Box display="flex" justifyContent="flex-end" flexGrow="1" pt={5}>
        <Button variant="outlined" size="small">
          More about me
        </Button>
        <MoreArrow />
      </Box>
    </Grid>
  );
}

export default About;
