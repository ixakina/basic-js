import { NotImplementedError } from "../extensions/index.js";

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
export default function getDNSStats(domains) {
  let copy = [];
  let res = {};
  for (let str of domains) {
    str = str.split(".").reverse();
    copy.push(str);
  }
  copy.forEach((arr) => {
    let temp = `.${arr.slice(0, 1)}`;
    res[temp] ? (res[temp] += 1) : (res[temp] = 1);

    for (let i = 1; i < arr.length; i++) {
      let temp = `.${arr.slice(0, i + 1).join(".")}`;
      res[temp] ? (res[temp] += 1) : (res[temp] = 1);
    }
  });
  return res;
}
