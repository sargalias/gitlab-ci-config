module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',

    '^abstracts/(.*)$': '<rootDir>/src/abstracts/$1',
    '^base/(.*)$': '<rootDir>/src/base/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^layout/(.*)$': '<rootDir>/src/layout/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^logic/(.*)$': '<rootDir>/src/logic/$1',
    '^utilities/(.*)$': '<rootDir>/src/utilities/$1',
    '^testUtils$': '<rootDir>/testUtils',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.jsx'],
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
};
