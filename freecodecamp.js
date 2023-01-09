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
function chainToSwitch(val) {
    let answer = "";
    switch(val) {
    case "bob": answer="Marley";break;
    case 42: answer="The Answer";break;
    case 1: answer="There is no #1";break;
    case 99: answer="Missed me by this much!";break;
    case 7: answer="Ate Nine";break;
  }
    return answer;
  }
//Return Early Pattern for Functions
function abTest(a, b) {
    if (a<0 || b<0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
//Counting Cards
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: count++; break;
    case 7:
    case 8:
    case 9: count+=0; break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A': count--;break;
  }
  if (count>0) return `${count} Bet`
  else if (count<=0) return `${count} Hold`
}

