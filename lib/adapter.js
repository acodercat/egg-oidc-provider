'use strict';

const changeCase = require('change-case');
const MemoryAdapter = require('./memory_adapter');


function persistenceToMap (persistence) {
  const persistenceMap = new Map();
  for (let key in persistence) {
    persistenceMap.set(changeCase.pascalCase(key), persistence[key]);
  }
  return persistenceMap;
}


module.exports = persistence => {

  const persistenceMap = persistenceToMap(persistence);
  class Adapter {
    constructor(name) {
      if (persistenceMap.has(name)) {
        this.persistence = persistenceMap.get(name);
      } else {
        this.persistence = new MemoryAdapter(name);
      }
      this.name = name;
    }

    async upsert(id, payload, expiresIn) {

      let expiresAt = (expiresIn ? new Date(Date.now() + (expiresIn * 1000)) : undefined)
      let data = { id, ...payload, expiresAt };
      for(let key in data) {
        if (!data[key])
          delete data[key] // delete undefined property
      }
      return this.persistence.upsert(data);
    }

    async find(id) {
      return await this.persistence.findById(id);
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

    static async connect() {

    }
  }
  return Adapter;
}


