// 7 kyu
// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//

    const getMiddle=(s)=>
        s.substr(Math.ceil(s.length/2-1),s.length%2 ? 1 : 2)
