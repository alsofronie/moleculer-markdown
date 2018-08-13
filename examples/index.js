'use strict';

let { ServiceBroker } = require('moleculer');
let MarkdownService = require('./../src/index');

// Create broker
let broker = new ServiceBroker({
  logger: console,
  logLevel: 'debug'
});

// Load markdown Service
broker.createService({
  name: 'markdown',
  mixins: [MarkdownService],
  settings: {}
});

// Start server
broker.start().then(() => {
  // Call action
  broker
    .call('markdown.transform', { md: '# Hello, Markdown' })
    .then(html => console.log('HTML is ', html));
});
