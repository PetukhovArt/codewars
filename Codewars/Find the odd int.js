function findOdd(arr) {
  if (arr.length == 1) return arr[0];
  else {
    for (let i = 0; i < arr.length; i++) {
      const count = arr.filter((value) => value === arr[i]).length;
      if (count % 2 == 1) {
        return arr[i];
      }
    }
  }
}

// 6 kyu
// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript
