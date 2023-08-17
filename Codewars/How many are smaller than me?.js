function smaller(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(i + 1).filter((n) => n < arr[i]).length);
  }
  return result;
}

// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
//   7 kyu
// How many are smaller than me?
