
const rotate=(str)=> {
  let arr=[]
  Array.from(str).map((el,i)=> arr.push(str.slice(1+i) + str.slice(0,1+i)))
  return arr
}

// function rotate(str){
//   let result =[]
//   for (let i=0; i < str.length; i++) {
//     result.push(str.slice(1+i) + str.slice(0,1+i))
//   }
//   return result
// }

// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript
