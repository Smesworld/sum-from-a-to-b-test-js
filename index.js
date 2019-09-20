
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return toN;
  }

  return sum(fromN + 1, toN) + fromN;
};

module.exports = sum;
