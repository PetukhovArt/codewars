function isIsogram(str){
    let removed=
        str.toLowerCase()
            .split('')
            .filter((val,index,src)=>{return src.indexOf(val)==index})
    let check=removed.length < str.length
    return !check
}

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript?filter=me&sort=best_practice&invalids=false
//     7 kyu
// Isograms

