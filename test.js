let arr =[1,2,3,4,4,5,5,6,6]
let copy = arr.slice();
let counts = {};
for (c of copy) { //value of repeated numbers
  if (!counts[c]) {
    counts[c] = 1;
  } else {
    counts[c] += 1;
  }
}
console.log(counts);