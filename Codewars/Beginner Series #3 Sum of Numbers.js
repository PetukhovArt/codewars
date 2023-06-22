function getSum(a, b) {
  let total = 0;
  if (a > b) {
    [a, b] = [b, a]; // Swap a and b
  }
  for (let i = a; i <= b; i++) {
    total += i;
  }
  return total;
}

console.log(getSum(1, 3));
//7 kyu https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
//Beginner Series #3 Sum of Numbers
