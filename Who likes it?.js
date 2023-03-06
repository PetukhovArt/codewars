function likes(n) {
    if (n.length===0) return 'no one likes this'
    if (n.length===1) return n[0]+' likes this'

    if (n.length===2) {
        let arrStart=n.slice(0,-1).map(x=>x+' and ').join('')
        let arrEnd=n.slice(-1).join() +' like this'
        return arrStart+arrEnd
    }

    if (n.length===3) {
        let arrStart=n.slice(0,1).join()+', '
        let arrMid=n.slice(1,-1).map(x=>x+' and ').join('')
        let arrEnd=n.slice(-1).join() +' like this'
        return arrStart+arrMid+arrEnd
    }
    if (n.length>3) {
        let arrStart=n[0]+', '
        let arrMid=n[1]+ ' and '
        let length= n.length-2
        let arrEnd= length+ ' others like this'
        return arrStart+arrMid+arrEnd
    }
}

//second

function likes(names) {
    names = names || [];
    switch(names.length){
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// 6 kyu
// Who likes it?

