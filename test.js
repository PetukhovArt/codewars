let queue=["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
let sheepCount = 0;
for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i]==="sheep") {
        sheepCount+=1;
    } else break;
  };
console.log(sheepCount);


