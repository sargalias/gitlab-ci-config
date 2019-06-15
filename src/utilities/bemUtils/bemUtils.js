import bemCssModules from 'bem-css-modules';
import cn from 'classnames';

bemCssModules.setSettings({
  elementDelimiter: '_',
  modifierDelimiter: '___',
});

const bemUtils = (cssModule, name) => {
  const block = bemCssModules(cssModule, name);

  function blockWrapper(elementParam, modsParam, parentClass) {
    const normalClass = block(elementParam, modsParam);
    return cn(normalClass, parentClass);
  }

  return blockWrapper;
};

export default bemUtils;
