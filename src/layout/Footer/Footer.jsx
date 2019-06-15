import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Footer.scss';

const b = bemUtils(styles);

const Footer = ({ parentClass }) => (
  <div className={b('', '', parentClass)}>
    <div className={b('container')}>
      <p className={b('text')}>
        By{' '}
        <a
          href="https://sargalias.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spyros Argalias
        </a>
      </p>
      <p className={b('text')}>
        View code on{' '}
        <a
          href="https://github.com/sargalias/light-bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
