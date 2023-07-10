function isAnagram(s1, s2) {
  let arr1=s1.toLowerCase().split('').sort()
  let arr2=s2.toLowerCase().split('').sort()

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return arr1.length == arr2.length
}

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript