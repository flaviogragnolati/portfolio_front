import { Box, Chip, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import React from 'react';
import styled, { css } from 'styled-components';
import useScreenSize from 'utils/useScreenSize';

const TechStackDiv = styled.div`
  width: 90%;
  color: ${(p) => p.theme.palette.text.primary};

  ${(p) => {
    if (p.screen.mobile) {
      return css`
        width: 100%;
      `;
    }
  }}
`;
const Backend = styled.div`
  /* background-color: blue;
  height: 20vh; */
  /* padding: 0.5rem; */
`;
const Frontend = styled.div`
  /* background-color: red;
  height: 20vh; */
  /* padding: 0.5rem; */
`;

const StyledChip = styled(Chip)`
  padding: 0.2rem 0.2rem;
  margin: ${(p) => p.theme.spacing(0.2)}px;
  ${(p) =>
    p.mobile &&
    css`
      margin: 0.1rem;
    `}
`;

function TechStack({ tech }) {
  const {
    Projects: {
      card: { techStackHeading },
    },
  } = useTranslation();
  let techStack;
  const [mobile, tablet, desktop] = useScreenSize();
  const screen = { mobile, tablet, desktop };
  if (mobile) {
    techStack = (
      <TechStackDiv screen={screen}>
        <Frontend>
          <Typography variant="h6">Frontend: </Typography>
          {tech.frontend.map((tag) => (
            <StyledChip color="primary" label={tag} />
          ))}
        </Frontend>
        <Backend>
          <Typography variant="h6">Backend: </Typography>
          <Box component="div" overflow="ellipsis">
            {tech.backend.map((tag) => (
              <StyledChip color="secondary" label={tag} />
            ))}
          </Box>
        </Backend>
      </TechStackDiv>
    );
  } else if (tablet) {
    techStack = <></>;
  } else {
    techStack = (
      <TechStackDiv screen={screen}>
        <Typography variant="h5" gutterBottom>
          {techStackHeading}
        </Typography>
        <Frontend>
          <Typography variant="h6" gutterBottom>
            Frontend:{' '}
          </Typography>
          {tech.frontend.map((tag) => (
            <StyledChip color="primary" label={tag} />
          ))}
        </Frontend>
        <br />
        <Backend>
          <Typography variant="h6" gutterBottom>
            Backend:{' '}
          </Typography>
          <Box component="div" overflow="ellipsis">
            {tech.backend.map((tag) => (
              <StyledChip color="secondary" label={tag} />
            ))}
          </Box>
        </Backend>
      </TechStackDiv>
    );
  }

  return <>{techStack}</>;
}

export default TechStack;
