const sum = function(arr) {
    return arr.reduce((a, b) => {
        return a + b;
    }, 0);
};

const diff = function(arr) {
    return arr.reduce((a, b) => {
        return -a - b;
    }, 0);
};

const mult = function(arr) {
    return arr.reduce((a, b) => {
        return a * b;
    });
};
const divide = function(arr) {
    return arr.reduce((a, b) => {
        return a / b;
    });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	result = num;
  if(num === 0){
    return 1;
  }
  while(num > 1){
    num--;
    result *= num;
  }
  return result;
};