import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import Button from './Button';

const Menu = props => {
  return (
    <div className="menu">
      {props.buttons.map((btnProps, idx) => (
        <Button
          key={idx}
          name={btnProps.name}
          onClick={() => props.onClick(btnProps.fn)}
        />
      ))}
    </div>
  );
};

Menu.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default Menu;
