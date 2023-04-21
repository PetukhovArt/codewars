function strCount(data){
    let c = 0;
    for (let i in data) {
        if (typeof data[i] == 'object') c += strCount(data[i]);
        if (typeof data[i] == 'string') c += 1
    }
    return c;
}

//https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
//7 kyu
// Count strings in objects