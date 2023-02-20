function positiveSum(arr) {
    return arr.filter(el => el>0).reduce((a,b)=>a+b,0)
  }

//short
const positiveSum=(y)=> y.filter(x => x>0).reduce((a,b)=>a+b,0)

//   https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
//   8 kyu
//   Sum of positive