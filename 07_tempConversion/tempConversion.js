const convertToCelsius = function(fahr) {
  let temp = 5/9 * (fahr - 32);
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let temp = 9/5 * cel + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
