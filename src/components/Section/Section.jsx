import React, { forwardRef } from 'react';
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
        <Grid item xs={1} />
        <Grid container item xs={10} md={10} spacing={2}>
          {children}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </StyledSection>
  );
}

export default forwardRef(Section);
