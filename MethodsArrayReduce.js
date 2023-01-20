function tailAndHead(arr){
    const lastDig=arr.map(x=> x.toString().slice(-1)).slice(0,-1).map((x) => +x)
    const firstDig=arr.map(x=> x.toString().slice(0, 1)).slice(1).map((x) => +x)
    const sum = [];
        lastDig.forEach((val, i) => {
            sum.push(val + firstDig[i]);
        })

    return sum.reduce((a,b)=> a*b)
    }

//7 kyu Training JS #30: methods of arrayObject---reduce() and reduceRight()
//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript