import React from 'react';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { getFormLang } from './components/contactForm';
import SocialContact from './components/SocialContact';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  /* padding: 0 10px; */
  &:hover {
    color: blue;
  }
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  color: ${(p) => p.theme.palette.primary.contrastText};
  background-color: ${(p) => p.theme.palette.primary.dark};
  &:hover {
    background-color: ${(p) => p.theme.palette.primary.light};
  }
`;

function Contact() {
  const {
    Contact: { formModel, subtitle, sideText, socialText },
  } = useTranslation();

  const [initialValues, contactFormValidation, labels, names] = getFormLang(
    formModel
  );

  const handleSubmit = (values, onSubmitProps) => {
    console.log('SUBMITTING FORM', values);
  };

  const emailMatch = sideText.match(/<.*>/g)[0].replace(/<|>/g, '');
  const splitSideText = sideText.split('<email>');

  return (
    <>
      <Grid
        container
        item
        xs={12}
        md={4}
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        <h3>{subtitle}</h3>
        <Box>
          {splitSideText[0]}
          <span>
            <Button size="medium">{emailMatch}</Button>
          </span>
          {splitSideText[1]}
        </Box>
        <p>{socialText}</p>
        <SocialContact />
      </Grid>
      <Grid
        container
        item
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        xs={12}
        md={8}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactFormValidation}
        >
          <Form>
            <Field
              component={StyledTextField}
              name={names.name}
              label={labels.name}
              variant="outlined"
              fullWidth
              required
            />
            <Box display="flex" flexGrow="1">
              <Field
                component={StyledTextField}
                name={names.email}
                label={labels.email}
                variant="outlined"
                fullWidth
                required
              />
              <Field
                component={StyledTextField}
                name={names.subject}
                label={labels.subject}
                variant="outlined"
                fullWidth
              />
            </Box>
            <Field
              component={StyledTextField}
              name={names.message}
              label={labels.message}
              variant="outlined"
              fullWidth
              multiline={true}
              rows={5}
              rowsMax={10}
              required
            />
            <br></br>
            <Box
              display="flex"
              flexGrow="1"
              justifyContent="flex-end"
              pt={2}
              pb={2}
            >
              <SubmitBtn type="submit" variant="contained" size="lg">
                {labels.submit}
              </SubmitBtn>
            </Box>
          </Form>
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
