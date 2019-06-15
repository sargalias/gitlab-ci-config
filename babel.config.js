module.exports = api => {
  const presets = ['@babel/preset-react'];
  const plugins = [];

  const isTest = api.env('test');
  if (isTest) {
    presets.push('@babel/preset-env');
    plugins.push('dynamic-import-node');
  }

  return {
    presets,
    plugins,
  };
};
