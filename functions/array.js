function analyze(array) {
  const arraydup = array.sort(function(a, b) {
    return a - b;
  });
  const average = array.reduce((sume, el) => sume + el, 0) / array.length;
  const min = arraydup[0];
  const max = arraydup[array.length - 1];
  const length = array.length;

  return { average: average, min: min, max: max, length: length };
}

module.exports = analyze;
