function splitAndMerge(string, separator) {
  let wordsSpaces = string.split(" ");
  for (let i = 0; i < wordsSpaces.length; i++) {
    wordsSpaces[i] = wordsSpaces[i].split("").join(separator);
  }
  return wordsSpaces.join(" ");
}
