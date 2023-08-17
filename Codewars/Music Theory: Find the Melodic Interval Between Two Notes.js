//https://www.codewars.com/kata/63fa8aafe6be1f57ad81729a/train/javascript
//7 kyu
// Music Theory: Find the Melodic Interval Between Two Notes

function getInterval(note1, note2) {
  var note = [];
  var notes = ["C", "D", "E", "F", "G", "A", "B"];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 7; j++) {
      note.push(notes[j] + i);
    }
  }
  return Math.abs(note.indexOf(note1) - note.indexOf(note2)) + 1;
}

console.log(getInterval("F4", "B4")); // Output: 4
