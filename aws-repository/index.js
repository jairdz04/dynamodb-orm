const methods = require('./methods');

class AwsOrm {
  constructor({ table, params, properties }) {
    this.table = table;
    this.params = params;
    this.properties = properties;
  }

  findByProperties() {
    const { table, params, properties } = this;
    return methods.findByProperties(table, params, properties);
  }

  find() {
    const { table, params, properties } = this;
    return methods.find(table, params, properties);
  }

  save() {
    const { table, params, properties } = this;
    return methods.save(table, params, properties);
  }

  update() {
    const { table, params, properties } = this;
    return methods.update(table, params, properties);
  }

  remove() {
    const { table, params, properties } = this;
    return methods.remove(table, params, properties);
  }
}

module.exports = AwsOrm;
