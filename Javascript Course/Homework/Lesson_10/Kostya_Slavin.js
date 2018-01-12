function check_arr(ar1, ar2) {
  let count = 0;
  ar1.map((e, i) => ar1[i] !== ar2[i] ? count++ : null);
  return  ar1.length === ar2.length && count == 2 || count == 0;
}
