#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const { default: app } = require('./dist/app');

console.log('Starting ...');

const res = app();

console.log(res);
