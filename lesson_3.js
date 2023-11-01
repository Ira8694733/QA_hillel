
// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

let catWeight = 6; // fill in weight
if (catWeight < 5) {
    console.log("The cat is small and still needs to be fed.");
} else {
    console.log("The cat is very fluffy and needs to be combed.");
}

let catWeight2 = 6; // fill in weight
let result =  (catWeight2 < 5) ? console.log("The cat is small and still needs to be fed."): 
console.log("The cat is very fluffy and needs to be combed.");


/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

let age = 20;
if (age>18 || age <50) {
    console.log("hire");
}

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

let grade = 'B'; // Change the grade to test different scenarios
let result2 = (grade === 'A' || grade === 'B') ? console.log('The student has passed the exam.'):
(grade === 'C' || grade === 'D') ? console.log('We send them for a retake.'):
(grade === 'E') ? console.log('Expulsion.'):console.log('Invalid grade.');

/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console 
 and tell the user whether he entered less or more or guessed the number. */

let secretNumber = 7;
let guessNumber = 8;

let result4 =  (guessNumber === secretNumber) ? console.log (`Congratulations!`) :
(guessNumber < secretNumber) ? console.log  ("Too low! Try a higher number.") : console.log  ("Too high! Try a lower number.");


 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */
let result5 = (height < 140) ? console.log("Заборонено на атракціон"): console.log("Проходьте, будь ласка!");
  
/* Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/
let result6 = (height < 50) ? console.log("Forbidden to use attraction"):
  (height >= 50 && height < 80) ?  console.log("Permit - attraction №1"):
  (height >= 80 && height < 120) ? console.log("Permit - attraction №1 or №2"):console.log("Permit - All");


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

let dayNumber = 3; // Change this value to test different days

let day;

switch (dayNumber) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid day number";
        break;
}

console.log(`The day corresponding to ${dayNumber} is ${day}.`);
 //Also, it's possible without the variable 'day', but then in each block, you need to output 'console.log' as in Task - 8."

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to 
 (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */
 
 
let monthNumber = 5; // Change this value to test different months

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log ("spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log ("summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log ("autumn");
        break;
    default:
        console.log  ("Invalid month number");
        break;
}



 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */

if (browser == 'Edge') {console.log( "You've got the Edge!" );
    } else if (browser == 'Chrome' || 'Firefox' || 'Safari' ||  'Opera' ) { alert( 'Okay we support these browsers too' );
    } else {console.log( 'We hope that this page looks ok!' );
    }

/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

let ageHire = 16; // Renamed the variable because it already exists in Task - 2 
switch (ageHire) {
    case (ageHire < 16) :  
        console.log( 'We cant hire u!' );
        break;
    case(ageHire >= 18) : 
        console.log( 'U can take full time job' );
        break;
    case(ageHire == 16 || ageHire == 17):
        console.log( 'U can take part time job');
};


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/

let username = prompt("Who's there?", '');

if (username === 'Admin') {
    let password = prompt('Password:', '');

    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if (password === null || password === '') {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (username === null || username === '') {
    alert('Canceled');
} else {
    alert("I don't know you");
}
