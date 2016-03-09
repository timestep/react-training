import React, { PropTypes } from 'react';
import Card from './Card';
import ProfileImage from './ProfileImage';
import Section from './Section';
import Button from './Button';

const ProfileCard = ({ name, description, id, onClick}) => {
  return (
    <Card key={ id }>
      <ProfileImage uri="./src/assets/placeholder.svg"/>
      <Section title={ name }>
        { description }
      </Section>
      <Button onClick={ onClick }>Delete</Button>
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
