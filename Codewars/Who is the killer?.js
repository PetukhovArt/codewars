// 7 kyu
// Who is the killer?
//   https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

const killer = (suspectInfo, dead) => {
  for (let key in suspectInfo) {
    if (dead.every((el) => suspectInfo[key].includes(el))) return key;
  }
};
