const AwsOrm = require('../aws-repository');
const propertyGenerator = require('./property-generator');

const SchemaDefinition = (table, properties) => {
  Object.keys(properties).forEach(key => {
    new propertyGenerator({ table, name: key, ...properties[key] }).validate();
  });

  return (...argvs) => {
    const params = argvs.length ? argvs[0] : {};
    return new AwsOrm({ table, params, properties });
  };
};

module.exports = SchemaDefinition;
