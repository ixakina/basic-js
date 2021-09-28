import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  arr.forEach((item, i, arr) => {
    if (item == "--double-next") {
      res.push(arr[i + 1]);
    } else if (item == "--double-prev") {
      res.push(arr[i - 1]);
    } else if (item == "--discard-prev") {
      res.pop(arr[i - 1]);
    } else res.push(item);
  });
  res.forEach((item, i, arr) => {
    if (item == "--discard-next") {
      arr.splice(i, 2);
    }
  });
  return res;
}
