import React from 'react';
import { GithubSquare as _GithubSquare } from '@styled-icons/fa-brands';
import { Browser as _Browser } from '@styled-icons/entypo';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-drection: row;
  flex-grow: 0.1;
  justify-content: space-between;
`;

const GithubSquare = styled(_GithubSquare)`
  color: ${(p) => p.theme.palette.text.secondary};
  cursor: pointer;
`;
const Browser = styled(_Browser)`
  color: ${(p) => p.theme.palette.text.secondary};
  cursor: pointer;
`;

function Icons({ git, website, ...rest }) {
  return (
    <StyledDiv {...rest}>
      <a href={git}>
        <GithubSquare size="2.5rem" />
      </a>
      <a href={git}>
        <Browser size="2.5rem" />
      </a>
    </StyledDiv>
  );
}

export default Icons;
