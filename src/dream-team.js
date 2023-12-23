const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const firtsLetters = [];
  const fillFirstLetters = (name) => {
    if (typeof name !== 'string') return;
    const nameTrimmed = name.trim();
    if (nameTrimmed.length < 1) return;
    if (nameTrimmed[0].search(/[a-zA-Z]/) === -1) return;
    firtsLetters.push(nameTrimmed[0].toUpperCase());
  };
  if (!Array.isArray(members)) return false;
  members.forEach(fillFirstLetters);
  return firtsLetters.sort().join('');
}

module.exports = {
  createDreamTeam,
};
