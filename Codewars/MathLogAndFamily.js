// 7 kyu
// Training JS #35: methods of Math---log() and its family
// https://www.codewars.com/kata/57353de879ccaeb9f8000564/train/javascript

function thinkingAndTesting(n, b) {
  return n - b ** Math.floor(Math.log(n) / Math.log(b));
}
