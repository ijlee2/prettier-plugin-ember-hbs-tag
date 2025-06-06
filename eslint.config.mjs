import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-node/typescript';

export default [
  ...baseConfiguration,
  {
    ignores: [
      'dist/',
      'dist-for-testing/',
      'node_modules/',
      'src/blueprints/',
      'tests/fixtures/',
      'tmp/',
      '.*/',
    ],
  },
];
