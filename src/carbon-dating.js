const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  /* Validation */
  if (!(sampleActivity instanceof String || (typeof sampleActivity === 'string'))) return false;
  const sampleNumber = Number(sampleActivity);
  if (!sampleNumber) return false;
  if (sampleNumber <= 0 || sampleNumber > MODERN_ACTIVITY) return false;

  const k = 0.693 / HALF_LIFE_PERIOD; // Eq 3
  const date = -Math.log(sampleNumber / MODERN_ACTIVITY) / k; // Eq 8
  return Math.ceil(date);
}

module.exports = {
  dateSample,
};
