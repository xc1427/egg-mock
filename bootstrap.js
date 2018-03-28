'use strict';

const assert = require('power-assert');
const mock = require('./index').default;

const options = {};
if (process.env.EGG_BASE_DIR) options.baseDir = process.env.EGG_BASE_DIR;
if (process.env.EGG_TYPESCRIPT) options.typescript = process.env.EGG_TYPESCRIPT;
const app = mock.app(options);

before(() => app.ready());
afterEach(mock.restore);

module.exports = {
  assert,
  app,
  mock,
  mm: mock,
};
