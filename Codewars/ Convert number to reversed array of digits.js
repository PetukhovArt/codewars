const digitize = (n) =>
  String(n)
    .split("")
    .map((n) => +n)
    .reverse();
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
//8 kyu
// Convert number to reversed array of digits
