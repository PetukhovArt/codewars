// https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript
// 7 kyu
// Valid Parentheses

const validParentheses = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop(); //delete prev '(' if ')' exists and length > 0
    }
  }
  return stack.length === 0;
};

console.log(validParentheses(")(()))")); //false
console.log(validParentheses("(())((()())())")); //true
