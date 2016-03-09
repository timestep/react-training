import React, { PropTypes } from 'react';
import ProfileCard from './ProfileCard';

const CardList = ({ profiles }) => {
  console.log(profiles);
  return (
    <dive>
      { profiles.map(ProfileCard) }
    </dive>
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
