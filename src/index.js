module.exports = function getZerosCount(number, base) {
  let num_nulls = 1000000000;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let count_k1 = 0;
      while (base % i === 0) {
        count_k1 += 1;
        base /= i;
      }
      let count_k2 = 0;
      let tmp = number;
      while (tmp / i > 0) {
        count_k2 = Math.floor(count_k2 + tmp / i);
        tmp /= i;
      }
      num_nulls = Math.min(num_nulls, Math.floor(count_k2 / count_k1));
    }
  }
  return num_nulls;
}