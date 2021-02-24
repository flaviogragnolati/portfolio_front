import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTanslation } from 'context/LangWrapper/useTranslation';
import { getFormLang } from './components/contactForm';
import { TextField } from 'formik-material-ui';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  /* margin: 1rem; */
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
            />
            <Box display="flex" flexGrow="1">
              <Field
                component={StyledTextField}
                name={names.email}
                label={labels.email}
                variant="outlined"
                fullWidth
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
            />
            <br></br>
            <Button type="submit" variant="outlined" size="lg">
              {labels.submit}
            </Button>
          </Form>
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
