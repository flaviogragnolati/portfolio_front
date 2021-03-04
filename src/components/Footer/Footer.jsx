import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import SocialContact from './components/SocialContact';

const FooterWrapper = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <SocialContact />
      <Typography variant="caption" display="block" gutterBottom>
        Copywrite 2021 FG
      </Typography>
    </FooterWrapper>
  );
}

export default Footer;
