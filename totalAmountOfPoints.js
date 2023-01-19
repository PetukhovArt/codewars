function points(games) {
    let count={
      win:0,
      lose:0,
      tie:0
    };

     for(i=0;i<games.length;i++) {
       if (games[i][0] > games[i][2]) {
         count.win+=1;
       } else if (games[i][0] < games[i][2]) {
         count.lose+=1;
     } else count.tie+=1;
    }
    return count.win*3+count.tie;
    }