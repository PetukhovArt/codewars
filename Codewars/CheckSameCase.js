function sameCase(a, b) {
  if (
    /[a-zA-Z]/.test(a) &&
    /[a-zA-Z]/.test(b) &&
    typeof a === "string" &&
    typeof b === "string"
  ) {
    if (
      (a == a.toUpperCase() && b == b.toUpperCase()) ||
      (a == a.toLowerCase() && b == b.toLowerCase())
    ) {
      return 1;
    } else return 0;
  } else return -1;
}

//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
//8 kyu Check same case
