import React from 'react';
import styled, { css } from 'styled-components';
import { Box, ButtonBase, Typography } from '@material-ui/core';
import { MailSend as _MailSend } from 'styled-icons/boxicons-regular';
import { useFormikContext } from 'formik';

const FillButton = styled(ButtonBase)`
  background: ${(p) => {
    if (p.submitStatus === 'pending') {
      return css`
        ${(p) => p.theme.palette.info.main};
      `;
    } else if (p.submitStatus === 'sent') {
      return css`
        ${(p) => p.theme.palette.success.main};
      `;
    } else if (p.submitStatus === 'error') {
      return css`
        ${(p) => p.theme.palette.error.main};
      `;
    } else {
      return css`
        ${(p) => p.theme.palette.background.paper};
      `;
    }
  }};
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

const MailSend = styled(_MailSend)`
  margin-left: 25px;
`;

function SubmitButton({ children, submitText, submitStatus, ...props }) {
  const { isSubmitting, isValid, isValidating } = useFormikContext();

  return (
    <FillButton
      variant="contained"
      focusRipple
      size="large"
      disabled={submitStatus === 'sent' || isSubmitting}
      submitStatus={submitStatus}
      {...props}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexGrow="1"
      >
        <Typography variant="h6">
          {submitStatus === 'idle' ? children : submitText}
        </Typography>
        <MailSend size="1.5rem" />
      </Box>
    </FillButton>
  );
}

export default SubmitButton;
