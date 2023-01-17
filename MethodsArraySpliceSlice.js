function threeInOne (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 3) {
      result.push(arr.slice(i, i+3).reduce((a,b)=>a+b, 0));
    }
    return result;
  }
