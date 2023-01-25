
    let str="bag dog dig dot doog dogs";  //bag dog dig dot doog dogs
    let word="god";
    let reg2=/g.d\s/ig;   //выдает NULL если нет совпадений

    console.log (reg2.test(str));

    console.log (str.match(reg2));


    // let regstr=word[0]+Array(word.length-1).join(".")+word.slice(-1); // /d.g/gi
    // let arr=str.split(" ");
    // let reg1 = new RegExp("^"+regstr+"$", "gi"); //регулярка
    // let ftr=arr.filter(el => el.length===word.length).join(" ")

// console.log (reg1); //проверяю регулярку
// console.log (reg1.test(str)); // true/false ДОЛЖНО РАБОТАТЬ СУКА
// console.log(ftr.match(reg1)); //совпадения

//regexObj.test(str)





