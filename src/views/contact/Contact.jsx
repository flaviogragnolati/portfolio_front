import React from 'react';
import { Box, Grid, TextField } from '@material-ui/core';
import Input from './components/Input';
import { Formik, Form } from 'formik';
import { getFormLang } from './components/contactForm';
import { useLangContext } from 'context/LangWrapper/langContext';

function Contact() {
  const [lang] = useLangContext();
  console.log('L:ANG', lang);
  const [initialValues, contactFormValidation] = getFormLang(lang);
  const handleSubmit = (values, onSubmitProps) => {
    console.log('SUBMITTING FORM', values);
  };

  return (
    <>
      <Grid item xs={8} md={5}>
        <h3>Let's talk about everything!</h3>
        <p>Don't like forms? Send me an email. 👋</p>
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
            <Input label="Name" />
            <Box display="flex" flexGrow="1">
              <Input label="Email" fullWidth />
              <Input label="Subject" fullWidth />
            </Box>
            <Input label="Message" multiline={true} rows={5} rowsMax={10} />
          </Form>
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
