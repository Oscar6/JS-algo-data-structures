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