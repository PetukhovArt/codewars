
let b=a.toString().split(".")
let result = (b[0].length < b[1].length) ? Math.ceil(a):
(b[0].length > b[1].length) ? Math.floor(a):
Math.round(a);
