function sentence(List) {
  return List.sort((a, b) => Object.keys(a) - Object.keys(b))
    .map((item) => Object.values(item))
    .join(" ");
}
//https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
//7 kyu String Reordering
