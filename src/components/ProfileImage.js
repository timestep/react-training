import React, { PropTypes } from 'react';

const ProfileImage = ({ src, size }) => {
  return (
    <img
      style={ styles }
      src={ src }
      width={ size }
      height={ size }
      className="flex-none m2" />
  );
};

ProfileImage.defaultName = 'ProfileImage';
ProfileImage.propTypes = {
  /**
   * The source of the image to be rendered
   */
  src: PropTypes.string,
  /**
   * The size of the profile image
   */
  size: PropTypes.number,
};
ProfileImage.defaultProps = {
  src: './src/assets/placeholder.svg',
  size: 96,
};

const styles = {
  borderRadius: '50%',
};

export default ProfileImage;
