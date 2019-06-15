import React from 'react';
import Button from 'components/Button';
import bemUtils from 'utilities/bemUtils';
import styles from './Controls.scss';

const b = bemUtils(styles);

const Controls = ({ parentClass, handleResetLastColor, handleResetAll }) => (
  <div className={b('', '', parentClass)}>
    <Button
      text="Reset last color"
      id="resetLastColorBtn"
      handleClick={handleResetLastColor}
    />
    <Button text="Reset all" id="resetAllBtn" handleClick={handleResetAll} />
  </div>
);

export default Controls;
