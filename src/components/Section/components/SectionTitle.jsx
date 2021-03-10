import React from 'react';
import styled, { keyframes } from 'styled-components';
import { orange } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const TitleDiv = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled(Typography)`
  color: ${(p) => p.theme.palette.primary.main};
  /* font-size: 3rem; */
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  position: relative;
  outline: none;
  &:before {
    content: '';
    position: absolute;
    width: 50%;
    height: 5px;
    bottom: -5%;
    left: 25%;
    background: ${(p) => p.theme.palette.secondary.light};
    border-radius: 3px;
    /* border-bottom: 3px solid ${(p) => p.theme.palette.secondary.light};
    border-radius: 3px; */
  }
`;

function SectionTitle({ title }) {
  return (
    <TitleDiv>
      <Title variant="h2" gutterBottom>
        {title}
      </Title>
    </TitleDiv>
  );
}

export default SectionTitle;
