// Slice and Splice

function frankenSplice(arr1, arr2, n) {
// Using the slice() function to create an exact replica of arr2 and 
// assign the result of the operation to a variable, clonedArray
    let clonedArray = arr2.slice();
// Iterating through every item in the first array
    for (let i = 0; i < arr1.length; i++) {
// Using the splice() function to insert each item into index n of clonedArray
        clonedArray.splice(n, 0, arr1[i]);
// Incrementing the index n by one. 
// Ensuring that every item from the arr1 is inserted into clonedArray in the proper index position.
        n++;
    }
    return clonedArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));