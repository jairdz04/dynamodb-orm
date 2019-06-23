const isEmpty = require('lodash/isEmpty');

const queryBuilder = (filters) => {
  let expressionAttributeValues = {};
  let filterExpression = '';
  Object.keys(filters).forEach(key => {
    if (filters[key]) {
      expressionAttributeValues[`:${key}`] = filters[key];
      if (isEmpty(filterExpression)) {
        filterExpression += `${key} = :${key}`;
      } else {
        filterExpression += ` and ${key} = :${key}`;
      }
    }
  });

  return {
    values: expressionAttributeValues,
    filter: filterExpression
  };
};

module.exports = queryBuilder;