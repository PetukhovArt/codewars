//8 kyu Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  let sentence = [];
  for (let key in obj) {
    if (key.length == 5) {
      sentence.push(key);
    }
    if (obj[key].length == 5) {
      sentence.push(obj[key]);
    }
  }
  return sentence;
}
