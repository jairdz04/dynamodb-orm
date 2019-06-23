const DynamoDB = require('../connection');
const { queryBuilder } = require('../helpers');
const { validateProperties } = require("../../config");
const autoGeneration = require("../../build-models/auto-generation");

const findByProperties = (table, params) => {
  if(!params.id) throw new Error("Missing 'id' property")
  return DynamoDB
  .get({
    TableName: table,
    Key: {
      id: params.id
    }
  })
  .promise();
};

const find = (table, params, properties) => {
  validateProperties.generalValidations({ params, properties }, false);  
  const searchParams = queryBuilder(params);
  return DynamoDB.scan({
    TableName: table,
    FilterExpression: searchParams.filter,
    ExpressionAttributeValues: searchParams.values
  }).promise();
};

const save = (table, params, properties) => {
  validateProperties.generalValidations({ params, properties });
  autoGeneration.needsGeneration(params, properties);
  return DynamoDB.put({
    TableName: table,
    Item: {
      ...params
    }
  }).promise();
};

const update = (table, params, properties) => {
  validateProperties.generalValidations({ params, properties }, false);

  return console.log(params);
};

const remove = (table, params) => {
  return console.log(params);
};

module.exports = {
  findByProperties,
  find,
  save,
  update,
  remove
};
