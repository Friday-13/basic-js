const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnses = {};

  for (let i = 0; i < domains.length; i += 1) {
    const domain = domains[i];
    const parts = domain.split('.').reverse();
    let dns = '.';
    parts.forEach((_, index) => {
      dns += parts.slice(0, index + 1).join('.');
      if (dnses[dns]) {
        dnses[dns] += 1;
      } else {
        dnses[dns] = 1;
      }
      dns = '.';
    });
  }
  return dnses;
}

module.exports = {
  getDNSStats
};
