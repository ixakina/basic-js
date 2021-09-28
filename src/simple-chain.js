import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    arguments ? this.res.push(`( ${String(value)} )`) : this.res.push(`( )`);
    return this;
  },
  removeLink(position) {
    if (!position || !Number.isInteger(position) || !isNaN(position)) {
      this.res = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let str = `${this.res.join("~~")}`;
    this.res = [];
    return str;
  },
};
