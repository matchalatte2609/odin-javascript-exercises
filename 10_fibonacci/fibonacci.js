const fibonacci = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (i=2; i <= n; i++){
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
