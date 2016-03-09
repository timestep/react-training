import React, { PropTypes } from 'react';

const style = {
  height: '30px',
};

const ProfileImage = ({ uri }) => {
  return (
    <img style={ style } src={uri}/>
  );
};

ProfileImage.defaultName = 'ProfileImage';
ProfileImage.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
};
ProfileImage.defaultProps = {};

export default ProfileImage;
