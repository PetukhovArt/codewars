function sortIt(arr) {
  let copy = arr.slice();
  let counts = {};
  for (c of copy) {
    //value of repeated numbers
    if (!counts[c]) {
      counts[c] = 1;
    } else {
      counts[c] += 1;
    }
  }

  copy.sort((a, b) => {
    if (counts[a] > counts[b]) {
      return 1;
    }
    if (counts[a] == counts[b]) {
      return b - a;
    }
    return -1;
  });
  return copy;
}
