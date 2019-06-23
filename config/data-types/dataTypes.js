const dataTypes = {
  HASH: 'HASH',
  STRING: 'S',
  NUMBER: 'N',
  BOOLEAN: 'BOOL',
  BUFFER: 'B',
  DATE: 'S',
  LIST: 'L',
  OBJECT: 'M',
  NUMBER_SET: 'NS',
  STRING_SET: 'SS',
  BINARY_SET: 'BS'
};

const dataValues = [
  'HASH',
  'S',
  'N',
  'BOOL',
  'B',
  'S',
  'L',
  'M',
  'NS',
  'SS',
  'BS'
];

module.exports = { dataValues, dataTypes };
