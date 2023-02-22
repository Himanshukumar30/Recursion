/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  // Base case
  if (idx === nums.length) return 1;

  // Normal case
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  // Base case
  if (idx === words.length) return longestWord;

  // Normal case
  longestWord = Math.max(words[idx].length, longestWord);
  return longest(words, idx + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx, newStr) {
  // Base case
  if (idx >= str.length) return newStr;

  // Normal case
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;

  // Base case
  if (leftIdx >= rightIdx) return True;

  // Normal case
  if (str[leftIdx] !== str[rightIdx]) return False;

  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // Base case
  if (idx === arr.length) return -1;

  // Normal case
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
