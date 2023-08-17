//www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// 6 kyu
// Data Reverse
function dataReverse(data) {
  const result = [];

  for (let i = 0; i < data.length; i += 8) {
    result.unshift(...data.slice(i, i + 8));
  }
  return result;
}

const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
const data2 = [
  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 1, 1,
];
console.log(dataReverse(data1));
