// function getNumbers(num1, num2) {
//     if (num1 > num2) {
//         for (let i = num2; i <= num1; i++) {
//             if (i % 2 === 0) {
//                 console.log(i)
//             }
//         }
//     }else {
//         for (let i = num1; i <= num2; i++) {
//             if (i % 2 === 0) {
//                 console.log(i)
//             }
//         }
//     }
// }
// getNumbers(31, 8)

// function getPower(num1, num2 = 2) {
//     const sum = num1 ** num2

//     return sum
// }
// console.log(getPower(5))

// function calcNumber(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(calcNumber(32))

// function getNumbers(n, m) {
//   let sumEvent = 0;
//   let sumAdd = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       sumEvent += i;
//     } else sumAdd += i;
//   }
//   console.log(sumEvent);
//   console.log(sumAdd);
// }
// getNumbers(4, 9);

const strings = [ "one", "twowwwww", "three", "schmetarling" ]
function getLongestString(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
        longestString = arr[i];
        }
    }
    return longestString;
    }
    console.log(getLongestString(strings))