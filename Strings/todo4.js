// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// function isPalindrome(num) {
//   return num === parseInt(num.toString().split('').reverse().join(''))
// }

// console.log(isPalindrome(-303));

// Jason Factor

// Coud you solve it without converting the integer to a string?

// ?? 


// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

function strStr(haystack, needle) {
  if (!needle) {
    return 0;
  }
  return haystack.indexOf(needle);
}

console.log(strStr("shannon", "=="));
