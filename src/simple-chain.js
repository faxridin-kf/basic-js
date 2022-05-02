const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      parseInt(position) > this.chain.length ||
      position < 1
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    let index = position - 1;
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.map((e) => `( ${e} )`).join("~~");

    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
