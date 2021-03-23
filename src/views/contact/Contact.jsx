import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'context/LangWrapper/useTranslation';
import { getFormLang } from './components/contactForm';
import { TextField } from 'formik-material-ui';
import SubmitButton from './components/SubmitButton';
import { defaults } from 'utils/config';
import useScreenSize from 'utils/useScreenSize';

const StyledTextField = styled(TextField)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

function Contact() {
  const {
    Contact: { formModel, submitSuccess, submitLoding, submitError },
  } = useTranslation();

  const [initialValues, contactFormValidation, labels, names] = getFormLang(
    formModel
  );

  const { mobile, tablet, desktop } = useScreenSize();

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitText, setSubmitText] = useState('');

  const handleSubmit = async (values, onSubmitProps) => {
    setSubmitStatus('pending');
    setSubmitText(submitLoding);
    try {
      const response = await fetch(defaults.mailURL, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        setSubmitStatus('sent');
        setSubmitText(submitSuccess);
      }
    } catch (error) {
      console.error('An error ocurred', error);
      setSubmitStatus('error');
      setSubmitText(submitError);
      // onSubmitProps.resetForm();
    }
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
          {(props) => {
            return (
              <Form>
                <Field
                  component={StyledTextField}
                  name={names.name}
                  label={labels.name}
                  variant="outlined"
                  fullWidth
                  required
                  disabled={submitStatus === 'sent' || props.isSubmitting}
                />
                {mobile || tablet.low ? (
                  <>
                    <Field
                      component={StyledTextField}
                      name={names.email}
                      label={labels.email}
                      variant="outlined"
                      fullWidth
                      required
                      disabled={submitStatus === 'sent' || props.isSubmitting}
                    />
                    <Field
                      component={StyledTextField}
                      name={names.subject}
                      label={labels.subject}
                      variant="outlined"
                      fullWidth
                      disabled={submitStatus === 'sent' || props.isSubmitting}
                    />
                  </>
                ) : (
                  <Box display="flex" flexGrow="1">
                    <Field
                      component={StyledTextField}
                      name={names.email}
                      label={labels.email}
                      variant="outlined"
                      fullWidth
                      required
                      disabled={submitStatus === 'sent' || props.isSubmitting}
                    />
                    <Field
                      component={StyledTextField}
                      name={names.subject}
                      label={labels.subject}
                      variant="outlined"
                      fullWidth
                      disabled={submitStatus === 'sent' || props.isSubmitting}
                    />
                  </Box>
                )}

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
                  disabled={submitStatus === 'sent' || props.isSubmitting}
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
                    <SubmitButton
                      type="submit"
                      submitStatus={submitStatus}
                      submitText={submitText}
                    >
                      {labels.submit}
                    </SubmitButton>
                  </Box>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </>
  );
}

export default Contact;
