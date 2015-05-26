var factorial = function(number) {
  var total_value = 1;
  if (isNaN(number)) {
    return 'is not a valid input.';
  }
  if (number === 0) {
    return 1;
  }
  return (number * factorial(number-1));
};
