// Javascript Algorithms and Data Structures

//Gold Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes==1) {
  return "Hole-in-one!"
} else if (strokes <= par-2) {
  return "Eagle"
} else if (strokes == par-1) {
  return "Birdie"
} else if (strokes == par) {
  return "Par"
  } else if (strokes == par+1) {
  return "Bogey"
  } else if (strokes == par+2) {
  return "Double Bogey"
  } else if (strokes >= par+3) {
  return "Go Home!"}
  else return "Change Me"
}

//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = '';
    switch (val) {
      case 1:
      answer='alpha';
      break;
      case 2:
      answer='beta';
      break;
      case 3:
      answer='gamma';
      break;
      case 4:
      answer='delta';
      break;
    }
    return answer;
  }