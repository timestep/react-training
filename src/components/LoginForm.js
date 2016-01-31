import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

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

  return errors;
};

const LoginForm = (props) => {
  const {
    handleSubmit,
    resetForm,
    isPending,
    hasError,
    message,
    fields: {
      username,
      password,
    },
  } = props;

  return (
    <Form className="mb2" handleSubmit={ handleSubmit }>
      <h1>Login</h1>

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
        <Button type="submit">
          Login
        </Button>
        <Button onClick={ resetForm } type="button" className="ml2 bg-red">
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};

LoginForm.defaultProps = {};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate,
})(LoginForm);
