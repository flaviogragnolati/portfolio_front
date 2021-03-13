import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'context/LangWrapper/useTranslation';
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
  const {
    Footer: { copy, socialLinks, socialTooltips },
  } = useTranslation();
  return (
    <FooterWrapper>
      <SocialContact links={socialLinks} tooltips={socialTooltips} />
      <Typography variant="caption" display="block" gutterBottom>
        {copy}
      </Typography>
    </FooterWrapper>
  );
}

export default Footer;
