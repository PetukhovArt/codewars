function alienLanguage(str){
    let words = str.split(" ")
    for (let i=0;i<words.length;i++) {
      words[i]=words[i].slice(0,-1).toUpperCase()+words[i].slice(-1).toLowerCase()
    }
    return words.join(" ")
    }