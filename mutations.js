// Mutations

function mutation(arr) {
// Make the two strings in the array lowercase. 
    const test = arr[1].toLowerCase();
// "test" will hold required characters needed in target.
    const target = arr[0].toLowerCase();
    
// Looping through test characters and verify if true or false
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
  
console.log(mutation(["hello", "Hello"]));



