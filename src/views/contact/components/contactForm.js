import * as Yup from 'yup';

export const getFormLang = (formModel) => {
  /**
   * Helper func to extract and format the data to fit formik.
   * Could be improved by abstracting the model shape out of it...
   */
  const { name, subject, email, message, submit } = formModel;
  const initialValues = {
    [name.name]: '',
    [subject.name]: '',
    [email.name]: '',
    [message.name]: '',
  };

  const contactFormValidation = Yup.object().shape({
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [subject.name]: Yup.string(),
    [email.name]: Yup.string()
      .email(`${email.invalidadErrorMsg}`)
      .required(`${email.requiredErrorMsg}`),
    [message.name]: Yup.string()
      .required(`${message.requiredErrorMsg}`)
      .min(10, `${message.minErrorMsg}`),
  });

  const labels = {
    [name.name]: name.label,
    [subject.name]: subject.label,
    [email.name]: email.label,
    [message.name]: message.label,
    [submit.name]: submit.label,
  };

  const names = {
    [name.name]: name.name,
    [subject.name]: subject.name,
    [email.name]: email.name,
    [message.name]: message.name,
  };

  return [initialValues, contactFormValidation, labels, names];
};
