import React, { PropTypes } from 'react';

const Section = ({ title,  children }) => {
  return (
    <div>
      { title ? (<h3>{ title }</h3>) : null }
      { children }
    </div>
  );
};

Section.defaultName = 'Section';
Section.propTypes = {
  /**
   * The children of the component to render
   */
  title: PropTypes.string,
  children: PropTypes.node,
};
Section.defaultProps = {};

export default Section;
