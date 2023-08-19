//www.codewars.com/kata/54530f75699b53e558002076/train/javascript
// 7 kyu

var nato = (function () {
  var letters = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };

  return function (word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      result.push(letters[word[i].toUpperCase()]);
    }
    return result.join(" ");
  };
})();

// describe("Solution", function() {
//   it("should convert word to NATO language string", function() {
//     const word = "ai";
//     const expected = "Alpha India";
//     const result = nato(word);
//
//     assert.strictEqual(result, expected);
//   });
