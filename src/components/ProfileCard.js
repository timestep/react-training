import React, { PropTypes } from 'react';

const ProfileCard = ({ src, name, topics }) => {
  return (
    <div className="p2 mb1 border flex">
      <img
        src={ src }
        style={ styles.image }
        width="48"
        height="48"
        className="flex-none mr2 border" />
      <div
        style={ styles.text }
        className="flex-auto flex flex-column">
        <h3 className="p0 m0">
          { name }
        </h3>
        <p className="m0">
          { topics }
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  topics: PropTypes.string,
};

ProfileCard.defaultProps = {
  src: 'src/assets/placeholder.svg',
  topics: '',
};

const styles = {
  image: {
    padding: '3px',
    borderRadius: '50%',
  },
  text: {
    justifyContent: 'center',
  },
};

export default ProfileCard;
