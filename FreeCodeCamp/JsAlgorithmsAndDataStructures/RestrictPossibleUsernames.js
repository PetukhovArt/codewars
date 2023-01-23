let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
let result = userCheck.test(username);

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
//Restrict Possible Usernames