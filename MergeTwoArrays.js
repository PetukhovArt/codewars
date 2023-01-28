function mergeArrays(arr1, arr2) {
    let res=arr1.concat(arr2).sort((a, b) => a-b)
    return res.filter((x,i) => res.indexOf(x)===i)
}

//  https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
//  8 kyu
//  Merge two sorted arrays into one
