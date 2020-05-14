// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// <<1>> Using helper methods
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// <<2>> Character to character and new for loop
// function reverse(str) {
//     let reversed = '';
//     for (let charr of str) {
//         reversed = charr +reversed
//     }
//     return reversed
// }


// <<3>> Using reduce method with es6
// function reverse(str) {
//  return str.split('').reduce((rev, char) => {
//      return char + rev;
//  }, '');
// }



module.exports = reverse; 
