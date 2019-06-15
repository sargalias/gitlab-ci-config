import React from 'react';
import bemUtils from 'bem-css-modules';
import styles from './Button.scss';

const b = bemUtils(styles);

const Button = ({ text, id, handleClick }) => (
  <button
    type="button"
    id={id}
    data-testid={id}
    onClick={handleClick}
    className={b()}
  >
    {text}
  </button>
);

export default Button;
