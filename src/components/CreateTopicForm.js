import React from 'react';
import { reduxForm } from 'redux-form';

import Label from './Label';
import Form from './Form';
import Button from './Button';
import Input from './Input';

const CreateTopicForm = (props) => {
  const {
    fields: {
      title,
      description,
    },
    handleSubmit,
    resetForm,
  } = props;

  return (
    <Form handleSubmit={ handleSubmit }>
      <Label>Title</Label>
      <Input fieldDefinition={ title }/>

      <Label>Description</Label>
      <Input fieldDefinition={ description }/>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

CreateTopicForm.defaultName = 'CreateTopicForm';
CreateTopicForm.defaultProps = {};
CreateTopicForm.propTypes = {};

export default reduxForm({
  form: 'createTopic',
  fields: ['title', 'description'],
})(CreateTopicForm);
