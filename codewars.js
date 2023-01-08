//codeWars results
//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    return bool ? 'Yes':'No';
};

//8 kyu MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase();
};

//8 kyu Area or Perimeter
const areaOrPerimeter = function(l , w) {
    if (l == w) {
        return (l * w)
    } else {
        return ((l + w) * 2)
    }
};

//8 kyu Quarter of the year
const quarterOf = (month) => {
    if (month <=  3) return 1
    if (month <=  6) return 2
    if (month <=  9) return 3
    return 4
};

//7 kyu Beginner Series #5 Triangular Numbers
function isTriangular(t) {
    return (Math.sqrt(8 * t + 1) % 1 === 0);
  }

//8 Training JS #5: Basic data types--Object
function animal(obj){
    let animal= {name:"dog",legs: 4, color:"white"};
    let result ='This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs' + '.';
    return result;
  }

function trueOrFalse(val){
    return val ? 'true' : 'false';
  }

//8 Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    if (n < 5) return n * 100
    else if (n >= 5 && n < 10) return n * 95
    else if (n >= 10) return n * 90
  }

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

