function XO(str) {
    const x=str.split('').filter(l=> l==='x' || l==='X').length
    const o=str.split('').filter(l=> l==='o' || l==='O').length
    return x==0 && o==0 ? true : x==o
}

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
//     7 kyu
// Exes and Ohs