// Repeat A String 

function repeatStringNumTimes(str, num) {
// Create an empty string variable to store the repeated word
    let repeatedString = "";
// Use a for loop or for loop to repeat code as many times as needed according to num
    for(let i = 0; i < num; i++) {
// Then we add the string to the variable created on step one inside of the loop
        repeatedString += str
    }
// At the end of the loop, return the variable for the repeated word
    return repeatedString;
}

console.log(repeatStringNumTimes("abc ", 3));


