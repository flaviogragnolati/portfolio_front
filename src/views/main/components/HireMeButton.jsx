import React from 'react';
import { Button } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

const HireButton = styled(Button)`
  margin-top: 2rem;
  padding: 1rem;
  min-width: 150px;
  :hover {
  }
`;

function HireMeButton({ text }) {
  return (
    <div>
      <HireButton variant="contained" size="large" color="secondary">
        {text}
      </HireButton>
    </div>
  );
}

export default HireMeButton;
