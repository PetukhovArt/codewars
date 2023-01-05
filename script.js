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

//8


