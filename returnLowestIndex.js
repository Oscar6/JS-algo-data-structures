// Returning Lowest Index

function getIndexToIns(arr, num) {
// Counting number of entries that are less than the new value num
// Then inserting new values after
    return arr.filter(val => num > val).length;
  }
  
  console.log(getIndexToIns([], 1));