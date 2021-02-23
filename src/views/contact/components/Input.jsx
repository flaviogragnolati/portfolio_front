import React from 'react';
import { makeStyles, TextField, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

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

function Input({ label, ...props }) {
  const classes = useStyles();

  return (
    <>
      <ValidationTextField
        className={classes.margin}
        label={label}
        variant="outlined"
        {...props}
      />
    </>
  );
}

export default Input;
