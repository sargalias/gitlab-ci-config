import React from 'react';
import bemUtils from 'utilities/bemUtils';
import styles from './Instructions.scss';

const b = bemUtils(styles);

const Instructions = ({ parentClass }) => (
  <section className={b('', '', parentClass)}>
    <h2 className={b('heading')}>Instructions</h2>
    <ul>
      <li>
        <strong>Click:</strong> Paint a circle with a unique color.
      </li>
      <li>
        <strong>Click on a circle, then drag:</strong> Generate a unique color
        and paint circles with it.
      </li>
      <li>
        <strong>Double click:</strong> Unpaint the circle.
      </li>
      <li>
        <strong>Reset last color:</strong> Unpaint the most recently painted
        circles.
      </li>
      <li>
        <strong>Reset all:</strong> Unpaint all circles.
      </li>
    </ul>
  </section>
);

export default Instructions;
