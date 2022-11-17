// Factorialize a number

function factorialize(num) {
// Since the return values for the function will always be greater than or equal to 1, product is initialized at one. 
    let result = 1;
    for(let i = 2; i <= num; i++) {
      result *= i;
    }
// For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.
// For all numbers passed to the function which are greater than one, the simple for loop will increment i by one each iteration and recalculate product up to the value num.
    return result;
  }
  
  console.log(factorialize(5));
    


