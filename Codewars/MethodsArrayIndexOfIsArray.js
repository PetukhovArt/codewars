function blackAndWhite(arr) {
  if (Array.isArray(arr) === false || arr === undefined)
    return "It's a fake array";
  if (Array.isArray(arr) && arr.includes(5) && arr.includes(13))
    return "It's a black array";
  if ((Array.isArray(arr) && !arr.includes(5)) || !arr.includes(13))
    return "It's a white array";
}
//8 kyu Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
