function roundIt(n) {
  let b = n.toString().split(".");
  return b[0].length < b[1].length
    ? Math.ceil(n)
    : b[0].length > b[1].length
    ? Math.floor(n)
    : Math.round(n);
}

//https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
//8 kyu Training JS #32: methods of Math---round() ceil() and floor(
