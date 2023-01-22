function maxMin(arr1,arr2){
    const diff = []
    arr1.forEach((val, i) => {
    diff.push(Math.abs(val - arr2[i]))
    })
    return  [Math.max(...diff),Math.min(...diff)]
  }
//7 kyu Training JS #33: methods of Math---max() min() and abs()
//https://www.codewars.com/kata/5733d6c2d780e20173000baa/solutions/javascript