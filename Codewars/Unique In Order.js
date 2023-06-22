// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//     6 kyu
// Unique In Order

const uniqueInOrder = function (iterable) {
  return typeof iterable == "object"
    ? iterable.filter((v, i, a) => a[i] !== a[i + 1])
    : iterable.split("").filter((v, i, a) => {
        console.log(
          a[i],
          a[i + 1],
          a[i] !== a[i + 1] ? `'Letter : '${a[i]} ' - TRUTH'` : ""
        );
        //log return the understanding of this filter iterations
        return a[i] !== a[i + 1];
      });
};
