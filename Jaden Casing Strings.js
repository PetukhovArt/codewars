String.prototype.toJadenCase = function ()
{ return this.split(' ')
    .map(w=> w[0]
        .toUpperCase() + w
        .slice(1))
    .join(' ') }

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
//     7 kyu
// Jaden Casing Strings
