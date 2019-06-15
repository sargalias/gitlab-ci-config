import React from 'react';
import MainContentHeader from 'components/MainContentHeader';
import LightBrightInteractiveArea from 'components/LightBrightInteractiveArea';
import Instructions from 'components/Instructions';
import bemUtils from 'utilities/bemUtils';
import useLightBrightApp from 'logic/useLightBrightApp';
import styles from './LightBrightApp.scss';

const b = bemUtils(styles);

const LightBrightApp = ({ parentClass, numCells }) => {
  const {
    cells,
    handleBoardMouseUp,
    handleCellKeyPress,
    handleCellMouseOver,
    handleCellClick,
    handleResetLastColor,
    handleResetAll,
    handleCellDoubleClick,
    cellRefs,
  } = useLightBrightApp(numCells);

  return (
    <div className={b('', '', parentClass)}>
      <MainContentHeader parentClass={b('mainContentHeader')} />
      <LightBrightInteractiveArea
        parentClass={b('lightBrightInteractiveArea')}
        cells={cells}
        handleCellClick={handleCellClick}
        handleCellKeyPress={handleCellKeyPress}
        handleCellMouseOver={handleCellMouseOver}
        handleBoardMouseUp={handleBoardMouseUp}
        handleResetLastColor={handleResetLastColor}
        handleResetAll={handleResetAll}
        handleCellDoubleClick={handleCellDoubleClick}
        cellRefs={cellRefs}
      />
      <Instructions parentClass={b('instructions')} />
    </div>
  );
};

export default LightBrightApp;
