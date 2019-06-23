const reservedWords = require('./words');

const existsWord = ({ word = '' }) => {
  return !!reservedWords.find(key => key === word.toUpperCase());
};

const getAllExistentWords = ({ allWords = [] }) => {
  return allWords.map(word => {
    return {
      word,
      exists: existsWord({ word })
    };
  });
};

module.exports = {
    existsWord,
    getAllExistentWords
}