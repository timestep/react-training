import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import Form from './Form';
import FormGroup from './FormGroup';
import Label from './Label';
import FormError from './FormError';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import Alert from './Alert';

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required.';
  }

  if (!values.description) {
    errors.description = 'Description is required.';
  }

  return errors;
};

const TopicForm = (props) => {
  const {
    handleSubmit,
    resetForm,
    isPending,
    hasError,
    message,
    fields: {
      title,
      description,
    },
  } = props;

  return (
    <Form
      className="left-align mb2"
      handleSubmit={ handleSubmit }>

      <h1>Add Topic</h1>

      <Alert isVisible={ isPending }>
        Loading...
      </Alert>

      <Alert isVisible={ hasError } status="error">
        { message }
      </Alert>

      <FormGroup>
        <Label>Title</Label>
        <Input type="text" fieldDefinition={ title } />
        <FormError
          isVisible={ title.touched && typeof title.error !== 'undefined' }>
          { title.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Label>Description</Label>
        <Textarea fieldDefinition={ description } />
        <FormError
          isVisible={ description.touched && typeof description.error !== 'undefined' }>
          { description.error || '' }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Button type="submit">
          Save
        </Button>
        <Button onClick={ resetForm } type="button" className="ml2 bg-red">
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};

TopicForm.defaultProps = {};

TopicForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'topic',
  fields: [
    'title',
    'description',
  ],
  validate,
})(TopicForm);
