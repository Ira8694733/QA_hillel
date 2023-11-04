/*Task - 1
  Replace the "for" loop with a "while" loop


for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}

*/

let i = 0;
while (i < 8) {
  console.log(`число - ` + i);
  i++;
}

/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

let sum = 0;
for (let i = 0; i <= 50; i++) { // ініціалізує змінну перемінної sum до 0. Потім він перебирає числа від 0 до 50
  if (i % 3 !== 0) { //  і для кожного числа перевіряє, чи воно не ділиться на 3, використовуючи оператор  %. 
    sum += i; // Якщо воно не ділиться, воно додає число до суми. 
  }
}
console.log("The sum of numbers from 0 to 50 (not divisible by 3) is:", sum)

while (sum < 50) {
  if (i % 3 !== 0) { 
    sum += i; 
  }
  i++;
}
console.log("The sum of numbers from 0 to 50 (not divisible by 3) is:", sum)


  do {
    console.log("The sum of numbers from 0 to 50 (not divisible by 3) is:", sum)
    if (sum % 3 !== 0) {
      sum += sum;
    }
    sum++;
  } while (sum <=50);

/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
let sumOfNumbers = 0;

for (let i = firstNumber; i <= secondNumber; i++) // Він продовжується, доки i <= secondNumber, збільшуючи i на 1 у кожній ітерації.
 {
  sumOfNumbers += i; // Усередині циклу ми додаємо i до суми в кожній ітерації.
}
console.log(sumOfNumbers);

/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

  for (let i = 10; i >= 0; i--) {
       console.log("Time's up!",  +i);
    }

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

  for (let i = 7; i <= 49; i--) {
    i+=7
    console.log("Time's up!",  i);
  }


/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //
