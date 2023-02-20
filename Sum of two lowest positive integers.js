const sumTwoSmallestNumbers=(arr)=>{
    let [a,b] = arr.sort((a,b)=>a-b)
    return a+b
}

// 7 kyu
// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript
