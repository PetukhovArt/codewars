// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
//     6 kyu
// Sum of Digits / Digital Root

const digitalRoot=(n)=>{
    let x = Array.from(String(n), Number).reduce((sum,el)=> sum+el,0)
    return x >= 10 ? digitalRoot(x) : x;
}