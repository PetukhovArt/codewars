const arr1 = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10, [11, 12]]];

const foo = (arr) => {
  let flattened = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flattened = [...flattened, ...foo(el)];
    } else {
      flattened.push(el);
    }
  });

  return flattened;
};

let flattenedArray = foo(arr1);
console.log(flattenedArray);
