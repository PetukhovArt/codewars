let arr=["abcde"];
let result = arr.map((i)=> {
    Math.ceil(arr[i].length / 2);
});
console.log(result);