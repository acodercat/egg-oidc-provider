'use strict';

const OidcProvider = require('oidc-provider');
const mount = require('koa-mount');
const adapter = require('./adapter');
const path = require('path');

module.exports = async app => {

  app.logger.info('[egg-oidc-provider] oidc-provider begin start');
  let config = app.config.oidcProvider;
  const clients = config.clients;
  const keystore = config.keystore;
  const issuer = config.issuer;
  delete config.clients;
  delete config.issuer;
  delete config.keystore;
  const oidcProvider = new OidcProvider(issuer, config);
  app.oidcProvider = oidcProvider;
  const persistence = loadPersistence(app);
  await oidcProvider.initialize({ keystore, clients, adapter: adapter(persistence) });
  app.oidcProvider = oidcProvider;
  const prefix = '/';
  app.use(mount(prefix, oidcProvider.app));

};


function loadPersistence(app) {
  return app.loader.loadFile(path.join(app.config.baseDir, `app/extend/oidc_persistence.js`));
}


