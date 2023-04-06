// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
//     6 kyu
// Duplicate Encoder


function duplicateEncode (word) {
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('')
}
