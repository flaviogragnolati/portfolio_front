import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { getFormLang } from './components/contactForm';
import { TextField } from 'formik-material-ui';
import SubmitButton from './components/SubmitButton';

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  /* padding: 0 10px; */
  &:hover {
    color: blue;
  }
`;

function Contact() {
  const {
    Contact: { formModel },
  } = useTranslation();

  const [initialValues, contactFormValidation, labels, names] = getFormLang(
    formModel
  );

  const handleSubmit = (values, onSubmitProps) => {
    console.log('SUBMITTING FORM', values);
  };

  return (
    <>
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
            <Grid container item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="row"
                flexGrow={1}
                // justifyContent="flex-end"
                pt={2}
                pb={2}
              >
                <SubmitButton type="submit">{labels.submit}</SubmitButton>
              </Box>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
