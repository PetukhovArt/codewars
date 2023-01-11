//8 kyu Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
    let short;
    let result;
      short = arr.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
      }).length;
    return arr.map(x => x.slice(0, short))
  }