// Find the Longest Word in a String

function findLongestWordLength(str) {
  // Take the string and convert it into an array of words. 
  let words = str.split(' ');
  // Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.
  let maxLength = 0;
  
  for (let i = 0; i < words.length; i++) {
// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. 
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  // At the end of the loop just return the number value of the variable maxLength.
  return maxLength;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));





