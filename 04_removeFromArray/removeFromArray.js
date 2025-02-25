const removeFromArray = function(arr, target) {
  let removedIndex = arr.indexOf(target);
  if (removedIndex > -1) {
    arr.splice(removedIndex, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
