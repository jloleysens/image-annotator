import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  return (
    <button className="btn btn-primary menu-button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
