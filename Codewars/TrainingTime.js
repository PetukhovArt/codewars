let shuffleIt = (arr, ...arrs) => {
  for (let i = 0; i < arrs.length; i++) {
    let [a, b] = [arrs[i][0], arrs[i][1]];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};
