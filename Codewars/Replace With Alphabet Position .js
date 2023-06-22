// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
//     6 kyu
// Replace With Alphabet Position

const alphabetPosition = (t) =>
  t
    .split("")
    .filter((c) => c.length === 1 && c.match(/[a-z]/i))
    .map((c) => c.toLowerCase().charCodeAt() - 96)
    .join(" ");
