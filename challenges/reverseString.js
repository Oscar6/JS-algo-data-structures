// Reverse a string

// Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
function reverseString(str) {
  let reverseHello = "";
// During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
  for(let i = str.length -1; i >= 0; i--) {
    reverseHello += str[i];
  }
// Finally, you return the final value of reversedStr.
  return reverseHello;
}
console.log(reverseString("hello"));

// OR

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString("hello"));