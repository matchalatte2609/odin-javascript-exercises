const convertToCelsius = function(fahrenheit) {
  return roundToOneDecimal((fahrenheit - 32) * (5/9));
};

const convertToFahrenheit = function(celsius) {
  return roundToOneDecimal((celsius*(9/5)) + 32);
};

const roundToOneDecimal = (num) => {
  return Math.round(num * 10) / 10;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
