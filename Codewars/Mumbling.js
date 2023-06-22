//
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//     7 kyu
// Mumbling

const accum = (string) =>
  string
    .split("")
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index)
    )
    .join("-");
