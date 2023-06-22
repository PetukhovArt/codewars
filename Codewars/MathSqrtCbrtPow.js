function cutCube(volume, n) {
  return Number.isInteger(Math.cbrt(n)) &&
    Number.isInteger(Math.cbrt(volume / n))
    ? true
    : false;
}
//8 kyu Training JS #34: methods of Math---pow() sqrt() and cbrt()
//https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
