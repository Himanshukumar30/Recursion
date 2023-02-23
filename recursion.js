/** product: calculate the product of an array of numbers. */

const { reverse } = require("dns");

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

function everyOther(str, idx = 0, newStr = "") {
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
  if (leftIdx >= rightIdx) return true;

  // Normal case
  if (str[leftIdx] !== str[rightIdx]) return false;

  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // Base case
  if (idx === arr.length) return -1;

  // Normal case
  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reverseStr = "") {
  // Base case
  if (reverseStr.length === str.length) return reverseStr;

  // Normal case
  reverseStr += str[str.length - 1 - idx];

  return revString(str, idx + 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
  // Base case
  for (let key in obj) {
    // Normal case
    if (typeof obj[key] === "string") strings.push(obj[key]);
    if (typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]));
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // If value not found return -1
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  // If value is found
  if (arr[middle] === val) return middle;

  // If val is on left of middle index
  if (arr[middle] > val) return binarySearch(arr, val, 0, middle - 1);

  // If val is on right on middle index
  return binarySearch(arr, val, middle + 1, arr.length);
}

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
