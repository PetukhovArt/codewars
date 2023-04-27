var number=function(arr){
    //your awesome code here
    if (arr.length!==0) {
        return arr.map((el,idx)=> `${idx+1}: ${el}`)
    } else return []
}

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
//7 kyu
// Testing 1-2-3