#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const { default: app } = require('./build/app');

console.log('Starting ...');

const res = app.play();

console.log(res);
