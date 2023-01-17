let arr = [1,2,3,4,5,6,7,8,9];
let result = [];
for (let i = 0; i < arr.length; i += 3) {
 result.push(arr.slice(i, i+3).reduce((a,b)=>a+b, 0))
}
console.table(result);

