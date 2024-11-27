/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: empty array returns 1
  if (nums.length === 0) return 1;
  
  // Recursive case: multiply first number with product of rest
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: single word returns its length
  if (words.length === 1) return words[0].length;
  
  // Recursive case: compare first word length with longest of remaining words
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
  // Base case: empty string or end of string
  if (idx >= str.length) return "";
  
  // Recursive case: take current char and skip next
  return str[idx] + everyOther(str, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: empty string or single character
  if (str.length <= 1) return true;
  
  // Base case: first and last characters don't match
  if (str[0] !== str[str.length - 1]) return false;
  
  // Recursive case: check rest of string
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, target, idx = 0) {
  // Base case: reached end of array
  if (idx >= arr.length) return -1;
  
  // Base case: found the target
  if (arr[idx] === target) return idx;
  
  // Recursive case: check next index
  return findIndex(arr, target, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: empty string or single character
  if (str.length <= 1) return str;
  
  // Recursive case: last char + reverse of remaining string
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: not found
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  // Base case: found target
  if (arr[mid] === target) return mid;
  
  // Recursive cases
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
