function isPangram(str){
    let low = str.toLowerCase();

    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
       if(!low.includes(char)){
          return false
        }
     }
   return true
 }

//  https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
//  6 kyu
//  Detect Pangram