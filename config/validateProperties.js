const generalValidations = ({ params, properties }, verifyRequired = true) => {
  /** Is required property */
  if (verifyRequired) {
    Object.keys(properties).forEach(key => {
      if (properties[key].required && !params[key])
        throw new Error(`The property ${key} is required!`);
    });
  }

  /** Given parameters is not defined in schema */
  Object.keys(params).forEach(param => {
    if (!properties[param])
      throw new Error(`The property ${param} is not defined in the schema!`);
  });
};

module.exports = { generalValidations };
