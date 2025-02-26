const palindromes = function (str) {
  const cleanStr = str.toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right)  {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
