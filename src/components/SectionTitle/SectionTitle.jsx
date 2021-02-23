import React from 'react';
import styled, { keyframes } from 'styled-components';
import { orange } from '@material-ui/core/colors';

const TitleDiv = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Title = styled.h2`
  color: ${(p) => p.theme.palette.primary.main};
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  position: relative;
  outline: none;
  &:before {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 3px solid ${orange['A400']};
  }
`;

function SectionTitle({ title }) {
  return (
    <TitleDiv>
      <Title>{title}</Title>
    </TitleDiv>
  );
}

export default SectionTitle;
