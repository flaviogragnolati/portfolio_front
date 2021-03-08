import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
  background-color: red;
  /* width: 100%; */
  margin: 1rem;
`;

const IconDiv = styled.div`
  background-color: blue;
`;
const ContentDiv = styled.div`
  background-color: gray;
`;

function MobileAboutCard({ text, icon }) {
  return (
    <Wrapper>
      <IconDiv>
        <Icon icon={icon} size="3rem" />
      </IconDiv>
      <ContentDiv>
        <Typography variant="body1">{text}</Typography>
      </ContentDiv>
    </Wrapper>
  );
}

export default MobileAboutCard;
