// https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/javascript
//     7 kyu
// Latin Squares

function makeLatinSquare(n) {
  const square = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(0)
  );
  //created 2d array

  //filling arrays
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square[i][j] = ((i + j) % n) + 1;
    }
  }

  return square;
}
