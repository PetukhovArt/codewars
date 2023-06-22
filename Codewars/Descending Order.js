function descendingOrder(n) {
  let x = Array.from(String(n), Number);
  return Number(x.sort((a, b) => b - a).join(""));
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
//     7 kyu
// Descending Order
