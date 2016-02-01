import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { validateEmail } from '../utils/validation';

import Form from './Form';
import FormGroup from './FormGroup';
import Label from './Label';
import FormError from './FormError';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  }

  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'A valid email is required.';
  }

  if (!values.displayName) {
    errors.displayName = 'Display Name is required.';
  }

  return errors;
};

const SignupForm = (props) => {
  const {
    handleSubmit,
    resetForm,
    isPending,
    hasError,
    message,
    fields: {
      username,
      password,
      email,
      displayName,
    },
  } = props;

  return (
    <Form className="mb2" handleSubmit={ handleSubmit }>
      <h1>Sign Up</h1>

      <Alert isVisible={ isPending }>
        Loading...
      </Alert>

      <Alert isVisible={ hasError } status="error">
        { message }
      </Alert>

      <FormGroup>
        <Label>Username</Label>
        <Input type="text" fieldDefinition={ username } />
        <FormError
          isVisible={ username.touched && typeof username.error !== 'undefined' }>
          { username.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input type="password" fieldDefinition={ password } />
        <FormError
          isVisible={ password.touched && typeof password.error !== 'undefined' }>
          { password.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input type="text" fieldDefinition={ email } />
        <FormError
          isVisible={ email.touched && typeof email.error !== 'undefined' }>
          { email.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Label>Display Name</Label>
        <Input type="text" fieldDefinition={ displayName } />
        <FormError
          isVisible={ displayName.touched && typeof displayName.error !== 'undefined' }>
          { displayName.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Button type="submit">
          Sign Up
        </Button>
        <Button onClick={ resetForm } type="button" className="ml2 bg-red">
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};

SignupForm.defaultProps = {};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'signup',
  fields: [
    'username',
    'password',
    'email',
    'displayName',
  ],
  validate,
})(SignupForm);
