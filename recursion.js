/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(idx === nums.length) return 1;
  return nums[idx]*product(nums, idx+1);
}

/** longest: return the length of the longest word in array of words. */

function longest(words,idx=0,currLongest) {
  if(idx===words.length) return currLongest;
  currLongest = Math.max(words[idx].length, currLongest);
  return longest(words,idx+1,currLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr='') {
  if(idx>=str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx+2, newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let firstIdx=idx;
  let lastIdx= str.length - idx - 1;
  if(firstIdx>=lastIdx) return true;
  if(str[leftIdx] != str[rightIdx]) return false;
  return isPalindrome(str, idx+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx === arr.length) return -1;
  if(arr[idx]===val) return idx;
  return findIndex(arr,val,idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, newStr='') {
  if (newStr.length===str.length) return newStr;
  newStr += str[str.length-1 -idx];
  return revString(str, idx+1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strVals= [];
  for(key in obj) {
    if(typeof obj[key]==='string') strVals.push(obj[key]);
    if(typeof obj[key]==='object') strVals.push(...gatherStrings(obj[key]));
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, first=0, last=arr.length) {
    if (left>right){
      return -1;
    }
    let middle = Math.floor((right+left)/2);
    if(arr[middle]===val) {
      return middle;
    }
    if(arr[middle]>val){
      return binarySearch(arr,val,left, middle-1);
    }
    return binarySearch(arr,val,middle+1,right);
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
