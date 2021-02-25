import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import { getFormLang } from './components/contactForm';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

function Contact() {
  const {
    Contact: { formModel, subtitle, sideText, socialText },
  } = useTanslation();

  const [initialValues, contactFormValidation, labels, names] = getFormLang(
    formModel
  );

  const handleSubmit = (values, onSubmitProps) => {
    console.log('SUBMITTING FORM', values);
  };

  return (
    <>
      <Grid item xs={8} md={5}>
        <h3>{subtitle}</h3>
        <p>{sideText}</p>
        <p>{socialText}</p>
      </Grid>
      <Grid
        container
        item
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        xs={10}
        md={7}
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
            <Box display="flex" flexGrow="1" justifyContent="flex-end">
              <Button type="submit" variant="outlined" size="lg">
                {labels.submit}
              </Button>
            </Box>
          </Form>
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
