function vowelOne(str) {
  return Array.from(str)
    .map((l) => (l.match(/[aeiou]/gi) ? 1 : 0))
    .join("");
}

// https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
// //7 kyu
// // Vowel one
