










//8 Conditional statement--switch
function howManydays(month){
    switch (month){
        case 2: return 28
        case 4:
        case 6:
        case 9:
        case 11: return 30
     }
     return 31
   }

//9 loop statement --while and do..while
function padIt(str,n){
    while (n > 0){
      if (n % 2){
        str = '*' + str
      } else {
        str = str + '*'
      }
      n--;
    }
    return str;
  }



//8 kyu Training JS #10: loop statement --for

function pickIt(arr){
  let odd=[],even=[];
  for (let i=0;i<arr.length;i++){
    if (arr[i]%2!==0){
      odd.push(arr[i])
    } else {
      even.push(arr[i])
    }
  }
  return [odd,even]
}

//8 kyu Training JS #11: loop statement --break,continue
function grabDoll(dolls){
  let bag=[];
  for (let i=0;i<dolls.length;i++) {
    if (dolls[i]=='Hello Kitty' || dolls[i]=='Barbie doll') {
      bag.push(dolls[i])
    } else {
      continue
    }
    if (bag.length==3) {
      break
    } else {
      continue
    }
  }
  return bag;
}

//8 kyu Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj){
  let sentence=[]
    for (let key in obj){
    if (key.length==5) {sentence.push(key)}
    if (obj[key].length==5) {sentence.push(obj[key])}
    }
  return sentence
}

//Training JS #13: Number object and its properties
let whatNumberIsIt = n =>
`Input number is ${n == Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY':
  n == Number.MAX_VALUE ? 'Number.MAX_VALUE':
  n == Number.MIN_VALUE ? 'Number.MIN_VALUE':
  n == Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY':
  Number.isNaN(n) ? 'Number.NaN':
  n}`

//8 kyu Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r,g,b){
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  if (red.length <2) {
    red='0'+red
  } else red;
  if (green.length <2) {
    green='0'+green
  } else blue;
  if (blue.length <2) {
    blue='0'+blue
  } else blue;
  let color = '#' + red + green + blue;
  return color;
}
//8 kyu Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
const howManySmaller = (arr,n) => arr.filter(element => element.toFixed(2) <n).length

//8 kyu Training JS #16: Methods of String object--slice(), substring() and substr()
