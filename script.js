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