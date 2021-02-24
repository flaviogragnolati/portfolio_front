import React from 'react';
import { TextField } from 'formik-material-ui';
import { makeStyles, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { Field } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const StyledTextField = styled(TextField)`
  &:hover {
    background-color: red;
  }
`;

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 8,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

function Input(name, label, ...rest) {
  const classes = useStyles();

  return (
    <>
      <Field component={StyledTextField} name={name} label={label} />
    </>
  );
}

export default Input;
