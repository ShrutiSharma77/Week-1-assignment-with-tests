/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const myArray = str.toLowerCase().split('');
const myString = myArray.filter(element => alpha.includes(element))

const reverseString = [];
for (let i = myString.length-1; i >= 0; i--) {
    reverseString.push(myString[i]);
}

if(myString.join('')===reverseString.join('')){
    return true;
}
else{
    return false;
}
}

module.exports = isPalindrome;
