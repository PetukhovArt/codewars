// https://www.codewars.com/kata/599b7383a5c1fe275c0000be/train/javascript

function isAnagram(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');

  let containsAllLetters = true;

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      containsAllLetters=false
      break;
    }
  }

  return containsAllLetters

}