function isolateIt(arr){

    return arr.map(str => {
       let itemMiddle = Math.ceil(str.length / 2);
       if (str.length%2==0) return str=`${str.slice(0,itemMiddle)}|${str.slice(itemMiddle)}`;
      if (str.length%2) return str=`${str.slice(0,itemMiddle-1)}|${str.slice(itemMiddle)}`;
    });
    }