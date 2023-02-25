function warnTheSheep(queue) {
    let copy = queue.slice();
    let wolfNum = copy.reverse().indexOf("wolf");
    let sheepCount = 0;
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i]==="sheep") {
            sheepCount+=1;
        } else break;
      };
    if (wolfNum==0) return "Pls go away and stop eating my sheep";
    if (wolfNum>0) return `Oi! Sheep number ${sheepCount}! You are about to be eaten by a wolf!`;
    }