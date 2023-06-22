//Training JS #13: Number object and its properties
let whatNumberIsIt = (n) =>
  `Input number is ${
    n == Number.POSITIVE_INFINITY
      ? "Number.POSITIVE_INFINITY"
      : n == Number.MAX_VALUE
      ? "Number.MAX_VALUE"
      : n == Number.MIN_VALUE
      ? "Number.MIN_VALUE"
      : n == Number.NEGATIVE_INFINITY
      ? "Number.NEGATIVE_INFINITY"
      : Number.isNaN(n)
      ? "Number.NaN"
      : n
  }`;
