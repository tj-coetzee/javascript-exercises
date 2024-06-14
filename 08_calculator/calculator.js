const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => {
    return total += curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => {
    return total*= curr;
  }, 1);
};

const power = function(base, pow) {
	return Math.pow(base, pow);
};

const factorial = function(num) {
	if (num === 0) { return 1; }

  let total = 1
  for (let i = num; i > 0; i--) { 
    total *= i; 
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
