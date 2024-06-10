const convertToCelsius = function(fahrenheit) {
    // x °F ≘ (x − 32) × 5/9 °C 
    return roundNumToOneDecimalPlace((fahrenheit - 32) * (5 / 9));
};

const convertToFahrenheit = function(celsius) {
    // x °C ≘ (x × 9/5 + 32) °F 
    return roundNumToOneDecimalPlace((celsius * (9 / 5) + 32));
};

const roundNumToOneDecimalPlace = function(number) {
    return Math.round(number * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
