import React, { PropTypes } from 'react';

import Card from './Card';
import Button from './Button';

const TopicCard = ({ topic, onYes, onNo }) => {
  return (
    <div className="inline-block">
      <Card topic={ topic } />

      <div className="flex flex-justify m2">
        <Button
          style={ styles.button }
          onClick={ onYes }>Interested</Button>

        <Button
          style={ styles.button }
          className="bg-red"
          onClick={ onNo }>Not Interested</Button>
      </div>
    </div>
  );
};

TopicCard.defaultProps = {};

TopicCard.propTypes = {
  topic: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  onNo: PropTypes.func.isRequired,
};

const styles = {
  button: {
    width: '150px',
  },
};

export default TopicCard;
