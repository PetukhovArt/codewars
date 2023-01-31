function add(num1, num2) {
    let arr1 = num1.toString().split('').reverse()
    let arr2 = num2.toString().split('').reverse()
    let arr3 = []
    for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
      arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
    }
    return parseInt(arr3.reverse().join(''));
  }

//   https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
//   7 kyu
//   16+18=214
