import React from 'react';
import LightBrightApp from 'components/LightBrightApp';
import Footer from 'layout/Footer';
import bemUtils from 'utilities/bemUtils';
import styles from './LightBrightPage.scss';

const b = bemUtils(styles);

const LightBrightPage = () => (
  <div className={b()}>
    <main>
      <LightBrightApp parentClass={b('lightBrightApp')} numCells={300} />
    </main>
    <Footer />
  </div>
);

export default LightBrightPage;
