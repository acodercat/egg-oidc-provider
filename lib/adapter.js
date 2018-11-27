'use strict';

const changeCase = require('change-case');
const MemoryAdapter = require('oidc-provider/lib/adapters/memory_adapter');


function persistenceToMap (persistence) {
  const persistenceMap = new Map();
  for (let key in persistence) {
    persistenceMap.set(changeCase.pascalCase(key), persistence[key]);
  }
  return persistenceMap;
}


module.exports = (persistence, app) => {

  const persistenceMap = persistenceToMap(persistence);
  class Adapter {
    constructor(name) {
      if (persistenceMap.has(name)) {
        this.persistence = persistenceMap.get(name);
      } else {
        app.logger.info(`[egg-oidc-provider] ${name} using memoryAdapter`);
        this.persistence = new MemoryAdapter(name);
      }
    }

    async upsert(id, payload, expiresIn) {
      return this.persistence.upsert(id, payload, expiresIn);
    }

    async find(id) {
      return await this.persistence.find(id);
    }

    async findByUserCode(userCode) {
      return await this.persistence.findByUserCode(userCode);
    }

    async destroy(id) {
      return this.persistence.destroy(id);
    }

    async consume(id) {
      return this.persistence.consume(id);
    }
  }
  return Adapter;
};
