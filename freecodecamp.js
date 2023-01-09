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
//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
    case "a": answer='apple'; break;
    case "b": answer='bird'; break;
    case "c": answer='cat'; break;
    default: answer='stuff'; break;
    }
    return answer;
  }
//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = '';
    switch(val){
      case 1:
      case 2:
      case 3: answer='Low'; break;
      case 4:
      case 5:
      case 6: answer='Mid'; break;
      case 7:
      case 8:
      case 9: answer='High'; break;
    }
    return answer;
  }
//Replacing If Else Chains with Switch