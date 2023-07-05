function rgbToGrayscale(rgb){

  let r = parseInt(rgb.slice(1, 3), 16);
  let g = parseInt(rgb.slice(3, 5), 16);
  let b = parseInt(rgb.slice(5, 7), 16);
  let grayscale = 0.299 * r + 0.587 * g + 0.114 * b;
  let grayRgb = Math.round(grayscale).toString(16).padStart(2, "0");
  let grayHex = "#" + grayRgb.repeat(3);
  return grayHex;
}

// https://www.codewars.com/kata/649c4012aaad69003f1299c1/train/javascript
//   7 kyu
// Color to Grayscale