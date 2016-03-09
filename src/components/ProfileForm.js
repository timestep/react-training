import React, { PropTypes } from 'react';
import Input from './Input';
import Button from './Button';

const ProfileForm = ({ onChange, value, onSubmit }) => {
  const bullshit = (e) => {
    onSubmit();
    e.preventDefault();
    return false;
  };
  return (
    <form onSubmit={ bullshit }>
      <Input label="ID" name="id" onChange={ onChange } placeholder="id" value={ value.id }/>
      <Input label="Name" name="name" onChange={ onChange } placeholder="name" value={ value.name }/>
      <Input label="Description" name="description" onChange={ onChange } placeholder="description" value={ value.description }/>
      <Button onClick={ bullshit }>Fuck all yall</Button>
    </form>
  );
};

ProfileForm.defaultName = 'ProfileForm';
ProfileForm.propTypes = {
  /**
   * The children of the component to render
   */
  onChange: PropTypes.func,
  value: PropTypes.object,
  onSubmit: PropTypes.func,
};
ProfileForm.defaultProps = {};

export default ProfileForm;
