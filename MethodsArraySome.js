function mirrorImage(arr){
    for(let i=0;i<arr.length-1;i++){
      if(arr[i].toString().split('').reverse().join('') === arr[i+1].toString()) {
      return [arr[i],arr[i+1]];}
    }
    return [-1,-1]
  }

//7 kyu Training JS #28: methods of arrayObject---every() and some()
//https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript