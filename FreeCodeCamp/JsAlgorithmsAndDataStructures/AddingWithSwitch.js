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