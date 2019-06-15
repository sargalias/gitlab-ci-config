import { useState, useRef } from 'react';
import randomHue from 'logic/randomHue';

const getCellIndex = e => Number(e.target.getAttribute('data-cell'));

const lightCells = (oldCells, cellIndexToColor, color) =>
  Array.from(oldCells, (cell, i) => (i === cellIndexToColor ? color : cell));

const isColorInCells = (cells, color) => cells.includes(color);

const isBoardEmpty = cells => {
  const nonEmptyCells = cells.filter(el => el !== undefined);
  return nonEmptyCells.length === 0;
};

const resetColors = (cells, colorToReset) =>
  cells.map(cell => (cell === colorToReset ? undefined : cell));

const generateCellsArray = numCells => Array.from({ length: numCells });

const useLightBrightApp = numCells => {
  const [cells, setCells] = useState(() => generateCellsArray(numCells));
  const [isDragging, setIsDragging] = useState(false);
  const [currentColor, setCurrentColor] = useState();
  const [colorHistory, setColorHistory] = useState([]);
  const cellRefs = Array.from({ length: 360 }, () => useRef(null)); // eslint-disable-line react-hooks/rules-of-hooks

  const handleResetLastColor = () => {
    if (isBoardEmpty(cells)) {
      setColorHistory([]);
      return;
    }

    const newColorHistory = Array.from(colorHistory);

    while (newColorHistory.length > 0) {
      const colorToReset = newColorHistory.pop();
      if (isColorInCells(cells, colorToReset)) {
        const newCells = resetColors(cells, colorToReset);
        setCells(newCells);
        setColorHistory(newColorHistory);
        break;
      }
    }
  };

  const handleResetAll = () => {
    setCells(generateCellsArray(numCells));
    setColorHistory([]);
    setIsDragging(false);
    setCurrentColor(undefined);
  };

  const handleCellClick = e => {
    const cellIndex = getCellIndex(e);
    const newColor = randomHue();
    const newCells = lightCells(cells, cellIndex, newColor);
    setCurrentColor(newColor);
    setIsDragging(true);
    setCells(newCells);
    setColorHistory([...colorHistory, newColor]);
  };

  const handleCellMouseOver = e => {
    if (isDragging) {
      const cellIndex = getCellIndex(e);
      const newCells = lightCells(cells, cellIndex, currentColor);
      setCells(newCells);
      cellRefs[cellIndex].current.focus(); // eslint-disable-line security/detect-object-injection
    }
  };

  const handleCellKeyPress = e => {
    if (['Enter', ' '].includes(e.key)) {
      const cellIndex = getCellIndex(e);
      const newColor = randomHue();
      const newCells = lightCells(cells, cellIndex, newColor);
      setCells(newCells);
    }
  };

  const handleCellDoubleClick = e => {
    const cellIndex = getCellIndex(e);
    const newCells = lightCells(cells, cellIndex, undefined);
    setCells(newCells);
  };

  const handleBoardMouseUp = () => {
    setIsDragging(false);
    setCurrentColor(undefined);
  };

  return {
    cells,
    handleBoardMouseUp,
    handleCellKeyPress,
    handleCellMouseOver,
    handleCellClick,
    handleResetLastColor,
    handleResetAll,
    handleCellDoubleClick,
    cellRefs,
  };
};

export default useLightBrightApp;
