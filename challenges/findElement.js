// Find Element

function findElement(arr, func) {
    let num = 0;
// Looking through the array using a for loop.
    for (let i = 0; i < arr.length; i++) {
// The num variable is being passed into the function, set num variable to each index in our array.
        num = arr[i];
// Function checks each number, if “true”, return that num.
        if (func(num)) {
            return num;
        }
    }
// If none of the numbers in the array pass the function’s test, return undefined.
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));




