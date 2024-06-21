// We reuse the previous function in 01_....js but implement parameters now
function add(a, b){
  return a + b;
}

// In this context, a and b are arguments we pass into the function add. Inside the function we return the sum of the arguments passed
// When printing this to the terminal we pass the arguments to the function again
console.log(add(5, 4)) //This outputs 9
console.log(add(16, 9)) //This outputs 25
console.log(add(12, 12)) //This outputs 24
console.log(add(10, 22)) //This outputs 32
console.log(add(10)) //This results in NaN as add is initially intended to handle 2 values specifically

// To handle the case of NaN in line 12, JS has a feature called REST parameters which ensures that a non specified length of arguments is acceptable
// This means 1 argument, 2 arguments, whatever the number of arguments the add function won't result in NaN
// Below is an example of the add function with REST parameter functionality implemented
function add(...numbers){
  let sum = 0;
  for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
// This new implementation of the add function accepts a varying number of arguments, meaning it can handle as many arguments as needed
// When we call the function the numbers we pass into the function as arguments get pushed into the array called numbers, you can use any other name besides numbers
// We initialize the sum to 0 
// Iteration:
  // Starts the counter at 0
  // So long the counter is less than the numbers we passed(elements in the numbers array)
  // Keeps increasing by 1
// Adds all numbers to the total sum
// Returns the sum

console.log(add(10));
console.log(add(10, 5));
console.log(add(20, 16, 32, 14));

// Unlike the first implemenntation of the add() function, so long the arguments we pass are all numbers the function will not result in Nan.
