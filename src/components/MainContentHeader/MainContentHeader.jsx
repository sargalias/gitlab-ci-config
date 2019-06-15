import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './MainContentHeader.scss';

const b = bemUtils(styles);

const MainContentHeader = ({ parentClass }) => (
  <header className={b(null, null, parentClass)}>
    <h1>Light Bright</h1>
  </header>
);

export default MainContentHeader;
