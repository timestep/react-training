import React, { PropTypes } from 'react';
import Card from './Card';
import ProfileImage from './ProfileImage';
import Section from './Section';

const ProfileCard = ({ name, description, id}) => {
  return (
    <Card key={ id }>
      <ProfileImage uri="./src/assets/placeholder.svg"/>
      <Section title={ name }>
        { description }
      </Section>
    </Card>
  );
};

ProfileCard.defaultName = 'ProfileCard';
ProfileCard.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
};
ProfileCard.defaultProps = {};

export default ProfileCard;
