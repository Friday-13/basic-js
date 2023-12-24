const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, unformedKey) {
    if (!message || !unformedKey) {
      throw Error('Incorrect arguments!');
    }

    const str = message.toUpperCase();
    const key = unformedKey.toUpperCase();

    let keyPointer = 0;
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const charPosition = this.alphabet.indexOf(str[i]);
      let encyptedChar = '';
      if (charPosition === -1) {
        encyptedChar = str[i];
      } else {
        const shift = this.alphabet.indexOf(key[keyPointer]);
        encyptedChar = this.alphabet[(charPosition + shift) % this.alphabet.length];
        keyPointer += 1;

        if (keyPointer === key.length) {
          keyPointer = 0;
        }
      }
      result += encyptedChar;
    }

    if (this.isDirect) {
      return result;
    }
    return result.split('').reverse().join('');
  }

  decrypt(message, unformedKey) {
    if (!message || !unformedKey) {
      throw Error('Incorrect arguments!');
    }
    const str = message.toUpperCase();
    const key = unformedKey.toUpperCase();

    let keyPointer = 0;
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
      const charPosition = this.alphabet.indexOf(str[i]);
      let decyptedChar = '';
      if (charPosition === -1) {
        decyptedChar = str[i];
      } else {
        const shift = this.alphabet.indexOf(key[keyPointer]);
        decyptedChar = this.alphabet[(26 + charPosition - shift) % this.alphabet.length];
        keyPointer += 1;

        if (keyPointer === key.length) {
          keyPointer = 0;
        }
      }
      result += decyptedChar;
    }

    if (this.isDirect) {
      return result;
    }
    return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
