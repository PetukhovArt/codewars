function findSimilarity(str, word) {
  let regstr = word[0] + Array(word.length - 1).join("\\w") + word.slice(-1);
  //get regExp form from "word"; \\w - check only letters
  let reg = new RegExp(regstr, "ig");
  //form the regExp expression
  let ftr = str
    .split(" ")
    .filter((el) => el.length == word.length)
    .join(" ");
  //filter str to take words that == word.length
  return ftr.match(reg) === null ? "" : ftr.match(reg).join(" ");
  //if match  null -> return empty string / else return match!
}

//https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
//7 kyu Training JS #38: Regular Expression--"^","$", "." and test()
