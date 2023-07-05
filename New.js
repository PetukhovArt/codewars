// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(arr) {
  let result=[]
  for (let i=0; i < arr.length;i++) {
    result
      .push(arr
        .slice(i+1)
        .filter(n=> n < arr[i])
          .length)
  }
  return result
}

console.log(smaller([1, 2, 0]));
console.log(smaller([5, 4, 3, 2, 1]));
