import React, { PropTypes } from 'react';

import ProfileImage from './ProfileImage';

const ProfileCard = ({ image, children }) => {
  return (
    <div className="flex mb2 border flex-center">
      <ProfileImage src={ image } size={ 64 } />

      <div className="flex-auto">
        { children }
      </div>
    </div>
  );
};

ProfileCard.defaultName = 'ProfileCard';
ProfileCard.propTypes = {
  /**
   * The children to be rendered inside the profile card
   */
  children: PropTypes.node,
  /**
   * The source of the image
   */
  image: PropTypes.string,
};
ProfileCard.defaultProps = {};

export default ProfileCard;
