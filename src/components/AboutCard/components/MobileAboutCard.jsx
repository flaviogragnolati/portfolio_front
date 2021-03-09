import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
  height: 100%;
  min-height: 5rem;
  width: 100%;
  position: relative;
  background-color: ${(p) => p.theme.palette.primary.dark};
  display: flex;
  /* margin-top: 4rem; */
  /* border: 2px red solid; */
  /* display: flex; */
  /* direction: row; */
  /* flex-grow: 1; */
  /* padding: 1.5rem 0.2rem; */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border: 10px solid ${(p) => p.theme.palette.secondary.dark};
    border-bottom-color: ${(p) => p.theme.main};
    border-right-color: ${(p) => p.theme.main};
  }
`;

const IconDiv = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
`;
const ContentDiv = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  color: white;
`;

function MobileAboutCard({ text, icon }) {
  return (
    <Box mt={5} mr={2} ml={2}>
      <Grid container item spacing={2}>
        <Wrapper>
          <Grid container item xs={4}>
            <IconDiv>
              <Icon icon={icon} size="3rem" />
            </IconDiv>
          </Grid>
          <Grid container item xs={8}>
            <ContentDiv>
              <Typography variant="body1">{text}</Typography>
            </ContentDiv>
          </Grid>
        </Wrapper>
      </Grid>
    </Box>
  );
  // return (
  //   <Grid
  //     container
  //     item
  //     // xs={12}
  //     // direction="row"
  //     // justify="center"
  //     // alignItems="stretch"
  //     spacing={0}
  //   >
  //     <Wrapper>
  //       <Grid contianer item xs={4}>
  //         <IconDiv>
  //           <Icon icon={icon} size="3rem" />
  //         </IconDiv>
  //       </Grid>
  //       <Grid container item xs={8}>
  //         <ContentDiv>
  //           <Typography variant="body1">{text}</Typography>
  //         </ContentDiv>
  //       </Grid>
  //     </Wrapper>
  //   </Grid>
  // );
}

export default MobileAboutCard;
