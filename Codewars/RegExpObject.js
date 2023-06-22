function countAnimals(a, c) {
  let res = [];
  for (let i = 0; i < c.length; i++) {
    res.push(a.split(c[i]).length - 1);
  }
  return res;
}
//7 kyu Training JS #37: Unlock new weapon---RegExp Object
//https://www.codewars.com/kata/5735e39313c205fe39001173/solutions/javascript
