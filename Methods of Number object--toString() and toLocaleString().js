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