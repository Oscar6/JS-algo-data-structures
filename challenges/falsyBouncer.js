// Falsy Bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.

function bouncer(arr) {
    // The Array.prototype.filter method expects a function that returns a Boolean value 
    // which takes a single argument and returns true for truthy value or false for falsy value. 
    return arr.filter(Boolean);
}
  
console.log(bouncer([7, "ate", "", false, 9]));
