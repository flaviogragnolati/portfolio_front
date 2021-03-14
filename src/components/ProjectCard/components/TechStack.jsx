import { Box, Chip, Tooltip, Typography } from '@material-ui/core';
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
        padding-left: 10px;
      `;
    }
  }}
`;
const Backend = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  font-weight: 500;
  /* background-color: blue;
  height: 20vh; */
  /* padding: 0.5rem; */
`;
const Frontend = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  font-weight: 500;
`;

const StyledChip = styled(Chip)`
  /* margin: 0 1px; */
  ${(p) =>
    p.desktop &&
    css`
      padding: 0.1rem 0.1rem;
      margin: ${(p) => p.theme.spacing(0.2)}px;
    `}/* ${(p) =>
    p.mobile &&
    css`
      margin: 0.1rem;
    `}  */
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

  const techTag = (array, props) => {
    if (array.length < 1) return null;
    if (props.screen === 'mobile') {
      return array.length > 4
        ? array
            .slice(0, 5)
            .map((tag, idx) => <StyledChip label={tag} {...props} />)
            .concat(<StyledChip label={'...'} {...props} />)
        : array
            .slice(0, 5)
            .map((tag, idx) => <StyledChip label={tag} {...props} />);
    } else {
      return array.map((tag, idx) => (
        <StyledChip label={tag} desktop {...props} />
      ));
    }
  };

  if (mobile) {
    techStack = (
      <TechStackDiv screen={screen}>
        <Frontend variant="h6" gutterBottom>
          Frontend:{' '}
          <span>
            {techTag(tech.frontend, {
              screen: 'mobile',
              color: 'primary',
              size: 'small',
            })}
          </span>
        </Frontend>
        <Backend variant="h6">
          Backend:{' '}
          <span>
            {techTag(tech.backend, {
              screen: 'mobile',
              color: 'secondary',
              size: 'small',
            })}
          </span>
        </Backend>
      </TechStackDiv>
    );
  } else if (tablet.all) {
    techStack = (
      <TechStackDiv screen={screen}>
        <Typography variant="h5" gutterBottom>
          {techStackHeading}
        </Typography>
        <Frontend variant="h6" gutterBottom>
          Frontend:{' '}
          <span>
            {techTag(tech.frontend, {
              screen: 'tablet',
              color: 'primary',
              size: 'medium',
            })}
          </span>
        </Frontend>
        <br />
        <Backend variant="h6">
          Backend:{' '}
          <span>
            {techTag(tech.backend, {
              screen: 'tablet',
              color: 'secondary',
              size: 'medium',
            })}
          </span>
        </Backend>
      </TechStackDiv>
    );
  } else {
    techStack = (
      <TechStackDiv screen={screen}>
        <Typography variant="h5" gutterBottom>
          {techStackHeading}
        </Typography>
        <Frontend>
          <Typography variant="h6" gutterBottom>
            Frontend:
          </Typography>
          {techTag(tech.frontend, {
            screen: 'desktop',
            color: 'primary',
            size: 'medium',
          })}
        </Frontend>
        <br />
        <Backend>
          <Typography variant="h6" gutterBottom>
            Backend:
          </Typography>
          <Box component="div" overflow="ellipsis">
            {techTag(tech.backend, {
              screen: 'desktop',
              color: 'secondary',
              size: 'medium',
            })}
          </Box>
        </Backend>
      </TechStackDiv>
    );
  }

  return <>{techStack}</>;
}

export default TechStack;
