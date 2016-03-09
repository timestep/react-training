import React, { PropTypes } from 'react';
import CardList from './CardList';

const ProfileList = ({ profiles }) => {
  return (
    <div>
      <CardList profiles={ profiles }/>
    </div>
  );
};

ProfileList.propTypes = {
  profile: PropTypes.array,
};

ProfileList.defaultProps = {
  liked: false,
};

export default ProfileList;
