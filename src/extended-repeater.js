const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = '+';
  if (options.separator !== undefined) {
    separator = options.separator;
  }

  let additionSeparator = '|';
  if (options.additionSeparator !== undefined) {
    additionSeparator = options.additionSeparator;
  }

  let addition = '';
  if (options.addition !== undefined) {
    addition = `${options.addition}`;
  }

  let strConverted = '';
  if (str !== undefined) {
    strConverted = `${str}`;
  }

  let repeatTimes = 1;
  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  }

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  const additions = new Array(additionRepeatTimes);
  additions.fill(addition);
  const fullAddition = additions.join(additionSeparator);

  const strings = new Array(repeatTimes);
  strings.fill(strConverted.concat(fullAddition));
  const fullStr = strings.join(separator);
  return fullStr;
}

const myTest = repeater('STRING', {
  repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00',
});

module.exports = {
  repeater,
};
