import React, { PropTypes } from 'react';
import ProfileCard from './ProfileCard';

const CardList = ({ profiles }) => {
  return (
    <div>
      { profiles.map(ProfileCard) }
    </div>
  );
};

CardList.defaultName = 'CardList';
CardList.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
};
CardList.defaultProps = {};

export default CardList;
