const betterThanAverage=(x, y)=> {
    return y > (x.reduce((sum, a) => sum + a, 0)/x.length)
}

// https://www.codewars.com/kata/5601409514fc93442500010b/solutions/javascript
//     How good are you really?