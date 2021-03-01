import { Chip, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import React from 'react';
import styled from 'styled-components';

const TechStackDiv = styled.div`
  width: 85%;
  color: ${(p) => p.theme.palette.text.primary};
`;
const Backend = styled.h6`
  /* padding: 0.5rem; */
`;
const Frontend = styled.h6`
  /* padding: 0.5rem; */
`;

const StyledChip = styled(Chip)`
  padding: 0.2rem 0.1rem;
  margin: ${(p) => p.theme.spacing(0.2)}px;
`;

function TechStack({ tech }) {
  const {
    Projects: {
      card: { techStackHeading },
    },
  } = useTranslation();

  return (
    <TechStackDiv>
      <Typography variant="h5" gutterBottom>
        {techStackHeading}
      </Typography>
      <br />
      <Frontend>
        <Typography variant="h6" gutterBottom>
          Frontend:{' '}
        </Typography>
        {tech.frontend.map((tag) => (
          <StyledChip color="primary" size="medium" label={tag} />
        ))}
      </Frontend>
      <br />
      <Backend>
        <Typography variant="h6" gutterBottom>
          Backend:{' '}
        </Typography>
        {tech.backend.map((tag) => (
          <StyledChip color="secondary" size="medium" label={tag} />
        ))}
      </Backend>
    </TechStackDiv>
  );
}

export default TechStack;
