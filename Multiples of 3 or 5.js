//creative with array :
const solution=(n)=>
    (n>0? [ ...Array(n-1).keys()].map((i) => ++i)
        .filter(x=> x%3==0 || x%5==0)
            .reduce((x,a)=> x+a,0) : 0)

//with array2:
function solution(number){
    let result = [];
    for (let i = 1; i < number; i++) {
        i % 3 === 0 || i % 5 === 0 ? result.push(i) : ''
    }
    return result.reduce((x, a) => x + a, 0)
}

// 6 kyu
// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript?filter=me&sort=best_practice&invalids=false