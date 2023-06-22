function rndCode() {
  let r = [];
  const l = "ABCDEFGHIJKLM";
  const s = "~!@#$%^&*";
  for (var i = 0; i < 2; i++) r.push(l[~~(l.length * Math.random())]);
  for (var i = 0; i < 2; i++) r.push(~~(100 * Math.random()));
  for (var i = 0; i < 2; i++) r.push(s[~~(s.length * Math.random())]);
  return r.join("");
}
//https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript
//7 kyu Training JS #36: methods of Math---kata author's lover:random()
