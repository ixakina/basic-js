import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date) {
    if (typeof date != "object" || date.constructor.name != "Date") {
      throw new Error("Invalid date!");
    }
    const seasons = ["winter", "spring", "summer", "autumn"];
    if (date.getMonth() >= 11 || date.getMonth() < 2) {
      return seasons[0];
    } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return seasons[1];
    } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return seasons[2];
    } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
      return seasons[3];
    }
  } else {
    return "Unable to determine the time of year!";
  }
}
