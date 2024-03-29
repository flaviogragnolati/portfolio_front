import React from 'react';
import styled from 'styled-components';
import { Box, ButtonBase, Typography } from '@material-ui/core';
import { Download as _Download } from '@styled-icons/boxicons-regular';
import { EyeOutline as _EyeOutline } from '@styled-icons/evaicons-outline';
import useLang from 'context/LangWrapper/useLang';

import CV_EN from 'assets/cv/CV_FlavioGragnolati(en).pdf';
import CV_ES from 'assets/cv/CV_FlavioGragnolati(es).pdf';

const FillButton = styled(ButtonBase)`
  /* background-color: ${(p) => p.theme.palette.primary.light}; */
  background: ${(p) => p.theme.palette.background.paper};
  border: 2px solid ${(p) => p.theme.palette.primary.light};
  font: inherit;
  color: ${(p) => p.theme.palette.text.primary};
  line-height: 1;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.2rem 2rem;
  width: 100%;
  transition: 0.5s ease;
  /* font-size:1.2rem; */
  &:hover {
    box-shadow: inset 0 0 0 3rem ${(p) => p.theme.palette.primary.light};
    border-color: ${(p) => p.theme.palette.primary.dark};
    color: ${(p) => p.theme.palette.primary.contrastText};
  }
`;

const Download = styled(_Download)`
  margin-left: 25px;
`;

const EyeOutline = styled(_EyeOutline)`
  margin-left: 25px;
`;

const Anchor = styled.a`
  display: flex;
  width: 100%;
`;

function CVButton({ text, icon, ...props }) {
  const [lang] = useLang();
  const handleViewCV = () => {
    if (lang === 'en') {
      window.open(CV_EN);
    } else if (lang === 'es') {
      window.open(CV_ES);
    }
  };

  if (icon === 'download') {
    return (
      <Anchor href={lang === 'en' ? CV_EN : CV_ES} download>
        <FillButton variant="contained" focusRipple size="large" {...props}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow="1"
          >
            <Typography variant="h6">{text}</Typography>
            {icon === 'download' ? (
              <Download size="1.5rem" />
            ) : (
              <EyeOutline size="1.5rem" />
            )}
          </Box>
        </FillButton>
      </Anchor>
    );
  } else {
    return (
      <FillButton
        variant="contained"
        focusRipple
        size="large"
        onClick={handleViewCV}
        {...props}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flexGrow="1"
        >
          <Typography variant="h6">{text}</Typography>
          {icon === 'download' ? (
            <Download size="1.5rem" />
          ) : (
            <EyeOutline size="1.5rem" />
          )}
        </Box>
      </FillButton>
    );
  }
}

export default CVButton;
