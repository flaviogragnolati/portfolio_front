import { useEffect } from 'react';
import * as Yup from 'yup';

export const getFormLang = (lang = 'en') => {
  const contactFormModel = {
    name: {
      name: 'name',
      label: { en: 'Name', es: 'Nombre' },
      requiredErrorMsg: {
        en: 'Name must be provieded',
        es: 'Debe proveer un nombre',
      },
    },
    subject: {
      name: 'subject',
      label: { en: 'Subject', es: 'Asunto' },
    },
    email: {
      name: 'email',
      label: { en: 'Email', es: 'Email' },
      requiredErrorMsg: {
        en: 'Email is required',
        es: 'El email es requerido',
      },
      invalidadErrorMsg: {
        en: 'Email format is invalid',
        es: 'El email es invalido',
      },
    },
    message: {
      name: 'message',
      label: { en: 'Message', es: 'Mensaje' },
      requiredErrorMsg: {
        en: 'The message body is required',
        es: 'El cuerpo del mensaje es requerido',
      },
    },
  };

  let formModelWithLang = {};
  console.log('inside lang', lang);
  for (const key in contactFormModel) {
    if (Object.hasOwnProperty.call(contactFormModel, key)) {
      const element = contactFormModel[key];
      console.log('element', element);
      if (typeof element === 'object') {
        formModelWithLang[key] = element[lang];
      } else {
        formModelWithLang[key] = element;
      }
    }
  }
  console.log('object', formModelWithLang);
  const { name, subject, email, message } = formModelWithLang;

  const initialValues = {
    [name.name]: '',
    [subject.name]: '',
    [email.name]: '',
    [message.name]: '',
  };

  const contactFormValidation = {
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [subject.name]: Yup.string(),
    [email.name]: Yup.string()
      .email(`${email.invalidadErrorMsg}`)
      .required(`${email.requiredErrorMsg}`),
    [message.name]: Yup.string().required(`${name.requiredErrorMsg}`),
  };

  return [initialValues, contactFormValidation];
};
