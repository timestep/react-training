import React, { PropTypes, Component } from 'react';
import ProfileForm from './ProfileForm';

class ProfileAddForm extends Component {
  constructor() {
    super();

    this.state = {
      formValue: {
        id: '',
        name: '',
        description: '',
      },
    };
  }

  render() {
    return (
      <ProfileForm onChange={ this.fieldChanged } value={ this.state.formValue } onSubmit={ this.submit }/>
    );
  }

  fieldChanged = (e) => {
    const o = {};
    o[e.name] = e.value;
    this.setState({
      formValue: Object.assign(this.state.formValue, o),
    });
  }

  submit = () => {
    this.props.onSubmit({...this.state.formValue});
  }
}

ProfileAddForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
ProfileAddForm.defaultProps = {
};

export default ProfileAddForm;
