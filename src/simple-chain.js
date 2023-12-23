const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chainArr.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position)
        || position < 1
        || position > (this.chainArr.length)
        || !Number.isInteger(position)) {
      this.finishChain();
      throw Error('You can\'t remove incorrect link!');
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = `( ${this.chainArr.join(' )~~( ')} )`;
    this.chainArr = [];
    return finishedChain;
  },
};


module.exports = {
  chainMaker
};
