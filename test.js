
    let str="bag dog dig dot doog dogs"
    let word="dog"
    let regstr=word[0]+Array(word.length-1).join(".")+word.slice(-1);
    let reg1=new RegExp(regstr+"+");
    let reg2=reg1+"ig"
    let sim = str.match(reg1);
    if (reg1.test(str)===false) {
      console.log("XYI");
    } else console.log(sim);

console.log(reg2);


