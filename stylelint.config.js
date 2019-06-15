module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-prettier/recommended',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-scss', 'stylelint-declaration-use-variable'],
  rules: {
    'at-rule-empty-line-before': null,
    'sh-waqar/declaration-use-variable': [['color', 'background-color']],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
