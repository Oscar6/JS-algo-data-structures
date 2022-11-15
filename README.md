JavaScript algorithms and data structures

// Reverse a string

function reverseString(str) {
  let reverseHello = "";
  for(let i = str.length -1; i >= 0; i--) {
    reverseHello += str[i];
  }
  return reverseHello;
}

console.log(reverseString("hello"));

		OR

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("hello"));



// Factorialize a number

function factorialize(num) {
  let result = 1;
  for(let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));



// Find the Longest Word in a String

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));