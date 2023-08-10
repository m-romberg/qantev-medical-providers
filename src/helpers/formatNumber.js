/**
 *
 * formatNumber
 *
 * Adds commas to a number that is a string
 * 1000 => 1,000
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default formatNumber;