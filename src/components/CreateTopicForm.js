import React, { Component } from 'react';
import Form from 'react-formal';
import yup from 'yup';

import Label from './Label';
import Button from './Button';

const modelSchema =  yup.object({
  title: yup.string().required('Name is required'),
  description: yup.string().required('Description is required')
});

class CreateTopicForm extends Component {
  constructor() {
    super();

    this.state = {
      model: {
        title: '',
        description: '',
      },
    };
  }

  render() {
    return (
      <Form
        schema={ modelSchema }
        value={ this.state.model }
        onChange={ model => this.setState({ model }) }
        onSubmit={ () => this.props.onSubmit(this.state.model) }>

        <div className="mb2">
          <Label>Title</Label>
          <Form.Field
            className="field block"
            name="title" />
          <Form.Message
            className="block"
            for="title"/>
        </div>

        <div className="mb2">
          <Label>Description</Label>
          <Form.Field
            className="field block"
            name="description" />
          <Form.Message
            className="block"
            for="description"/>
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

CreateTopicForm.defaultName = 'CreateTopicForm';
CreateTopicForm.defaultProps = {};
CreateTopicForm.propTypes = {};

export default CreateTopicForm;
