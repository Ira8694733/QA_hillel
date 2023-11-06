/* Task - 0
    Create a function task1Func which will always return true
*/

function task1Func() {
    return true;
  }
  console.log (task1Func()) // true

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1

    
*/
function min(a, b) {
    return Math.min(a, b);
  }
  
  console.log(min(2, 5));  // Output: 2
  console.log(min(3, -1)); // Output: -1
  console.log(min(1, 1));  // Output: 1

/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow (x, n) {
    return x**n;
}
console.log (pow(3, 2));
console.log (pow(3, 3));
console.log (pow(1, 100));

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/

function task3Func (x, n=5) {
    return x**n;
}
console.log (task3Func(3));
console.log (task3Func(3));
console.log (task3Func(1));

const Func = (x, n=5) => x**n
console.log (Func(3));
console.log (Func(3));
console.log (Func(1));

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/

let task4Func = (pet) => {
    if (1) {
        return "My lunch for today is pizza"
    }
    else if (2) {
        return "My lunch for today is spagetti" 
    }
    else {
        return "My lunch for today is other" 
    }
}

console.log (task4Func(2));

/* Task 5
    You need to draw a rectangular triangle of stars (or pluses, or some other symbol) in the console: 
    one star on the first line, two on the second, and so on. 
    Write your solution in the form of a function that takes two parameters:
    the height of the triangle and the symbol you want to use to draw it.

    Example, 
    drawTriangle(5, *);
*
**
***
****
*****

*/

const drawTriangle = (height, symbol) => {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}

drawTriangle(5, '*');

   
/* Task 6
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
 
    Example,
    if function2  returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION"
*/
// Option 1
const function1 = (sentence) => {
    const result = sentence();
    return `The result = ${result}`;
 }
    const function2 = () => {
    return "THIS IS THE RESULT OF CALLBACK FUNCTION";
 }
console.log(function1(function2)); 

// Option 2
function Funk1(sentence) {
   console.log("The result = " + sentence);
  }
  
  function Funk2(myCallback) {
    const result = "THIS IS THE RESULT OF CALLBACK FUNCTION";
    myCallback(result);
  }
  
  Funk2(Funk1);
 
/* Task 7
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example
    funcName(7) // => gooooooogle
*/

function task13Func(a) {
    console.log("g" + a + "gle");
   }
   
   function funcName(myCallback) {
     const result ='o'.repeat(7);
     myCallback(result);
   }
   
   funcName(task13Func);

