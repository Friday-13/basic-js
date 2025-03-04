const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileNames = new Set();
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    if (fileNames.has(name)) {
      let count = 1;
      let newName = `${name}(${count})`;
      while (fileNames.has(newName)) {
        count += 1;
        newName = `${name}(${count})`;
      }
      fileNames.add(newName);
    } else {
      fileNames.add(name);
    }
  }
  return [...fileNames];
}

module.exports = {
  renameFiles,
};
