function cutIt(arr){
let shortest;
let result;

    shortest = arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
    }).length;



console.log(shortest);
}
cutIt(["ab","cde","fgh"]);



