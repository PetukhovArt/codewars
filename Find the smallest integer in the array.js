
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
//     8 kyu
// Find the smallest integer in the array


class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a,b)=> a-b)[0]
    }
}