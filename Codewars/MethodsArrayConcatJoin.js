function bigToSmall(arr) {
  let newArr = []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
  return newArr;
}
//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
//8 kyu Training JS #29: methods of arrayObject---concat() and join()
