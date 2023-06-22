//8 kyu Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
const howManySmaller = (arr, n) =>
  arr.filter((element) => element.toFixed(2) < n).length;
