import React, { forwardRef, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import SectionTitle from './components/SectionTitle';

const StyledSection = styled.section`
  padding-bottom: 4rem;
`;

function Section({ id, title, children, ...props }, ref) {
  return (
    <StyledSection id={id} ref={ref} {...props}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <SectionTitle title={title} />
        </Grid>
        <Grid item xs={0} md={1} xl={4} />
        <Grid
          container
          item
          xs={12}
          md={10}
          xl={4}
          spacing={5}
          justify="center"
        >
          {children}
        </Grid>
        <Grid item xs={0} md={1} xl={4} />
      </Grid>
    </StyledSection>
  );
}

export default forwardRef(Section);
