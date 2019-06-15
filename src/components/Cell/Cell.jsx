import React from 'react';
import styles from './Cell.scss';

const Cell = React.forwardRef(
  (
    {
      parentClass,
      index,
      handleClick,
      handleMouseOver,
      handleKeyPress,
      hue,
      handleCellDoubleClick,
    },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      className={`
        ${styles.Cell} ${Number.isInteger(hue) ? styles.Cell___isOn : ''}
      ${parentClass || ''}
      `}
      data-testid={index}
      data-cell={index}
      onMouseDown={handleClick}
      onKeyDown={handleKeyPress}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onDoubleClick={handleCellDoubleClick}
      style={{ '--hue': hue }}
      aria-label={`Cell ${index}`}
    />
  ),
);

export default Cell;
