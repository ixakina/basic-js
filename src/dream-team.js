import { NotImplementedError } from "../extensions/index.js";

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
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    members.forEach((item) => {
      if (typeof item == "string") {
        arr.push(item.trim().slice(0, 1).toUpperCase());
      }
    });

    return arr.sort().join("");
  } else {
    return false;
  }
}
