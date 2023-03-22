// 6 kyu
// Stop gninnipS My sdroW!
//
//     https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

let spinWords=(s)=> s.split(' ').map(w=> w.length >=5 ? w.split('').reverse().join('') : w).join(' ')