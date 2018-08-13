'use strict';

const { ServiceBroker } = require('moleculer');
const { MoleculerError } = require('moleculer').Errors;

const MarkdownService = require('./../../src');

function protectReject(err) {
  console.error(err.stack);
  expect(err).toBe(true);
}

describe('Test MarkdownService', () => {
  const broker = new ServiceBroker({ logger: false });
  const service = broker.createService(MarkdownService);

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('should create Markdown client instance', () => {
    return broker
      .start()
      .catch(protectReject)
      .then(() => {
        expect(service.transform).toBeDefined();
      });
  });

  it('should correctly transform markdown to html', () => {
    const htm = service.transform('# Hello, world');
    expect(htm).toEqual('<h1>Hello, world</h1>');
  });
});
