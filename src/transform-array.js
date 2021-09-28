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
      if (arr[i + 1]) res.push(arr[i + 1]);
    } else if (item == "--double-prev") {
      if (arr[i - 1]) res.push(arr[i - 1]);
    } else if (item == "--discard-prev") {
      if (arr[i - 1]) res.pop(arr[i - 1]);
    } else if (arr[i - 1] == "--discard-next") {
      if (arr[i + 1]) res.splice(res.indexOf("--discard-next"), 2);
    } else res.push(item);
  });

  return res;
}
