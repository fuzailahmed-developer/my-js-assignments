//! Program 1 - Write a program to check whether the given input number is
//! divisible by 3 or else show a message “Number is not divisible
//! by 3
var enterNumToCheckDivisible = +prompt("Enter Your Number to Check Divisible or not");
if (enterNumToCheckDivisible % 3 == 0) {
    console.log("Your Number is " + enterNumToCheckDivisible + " is Divisible By 3");
} else {
    console.log("Number is not divisible by 3");
}
//! Program - 2 Write a program that checks whether the given input is an even
//! number or an odd number.
var checkNumOddEven = +prompt("Enter Number to Check Number is Even or Odd");
if (checkNumOddEven % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}
//! Program - 3 Write an if/else statement with the following condition:
//! If the variable age is greater than 18, output "Old enough",
//! otherwise output "Too young".
var age = 28;
if (age > 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}

//! Program - 4 Write a program that prompts the user for their name, and then
//! displays a special greeting to that person if their name is the
//! same as yours. If the name entered by the user is anything
//! other than your name, your code should not produce any
//! output.
var checkSameName = prompt("Enter Your Name");
var myName = "fuzail";
if (checkSameName == myName) {
    console.log("Your Name And My Name is Same");
}
//! Program - 5 Write a program to check whether the given input number is
//! divisible by 3 or not by using Switch Case statements. Show a
//! message “Number is not divisible by 3” or “Number is divisible
//! by 3”.
var divisibleNumCheck = +prompt("Enter Number")
switch (divisibleNumCheck % 3) {
    case 0:
        console.log("Number is divisible by 3");
        break;

    default:
        console.log("Number is not divisible by 3");
        break;
}

//! Program - 7 Program  Write a program to create a calculator for +, -, *, /, % using
//! switch case statements. (number1, number2 and operator will
//! be input)
var number1 = +prompt("Enter Number One");
var number2 = +prompt("Enter Number Two")
var equation = prompt("Enter equation");
if (equation == "+") {
    var result = number1 + number2;
    console.log(result);
}
else if(equation == '-'){
    var result = number1 + number2;
    console.log(result);
} 
else if(equation == '*'){
    var result = number1 * number2;
    console.log(result);
} 
else if(equation == '/'){
    var result = number1 / number2;
    console.log(result);
} 
else {
    console.log("Wrong Equation");   
}
//! Program 8 - Write a program that takes time as input from user in 24 hours
//! clock format like: 1900 = 7pm. Implement the following case
//! using if, else & else if statements
var enterTime = prompt("Enter Time")
if (enterTime >= "0000" && enterTime < 1200) {
    console.log("Good Morning");
} 
else if(enterTime >= 1200 && enterTime < 1700){
    console.log("Good Afternoon!");
}
else if(enterTime >= 1700 && enterTime < 2100){
    console.log("Good Evening!");
}
else if(enterTime >= 2100 && enterTime <= 2359){
    console.log("Good Evening!");
}
else {
    console.log("!InCorrect Time");
}
//! Program 9 -  Write a program that takes a calendar year in YYYY format in
//! a variable. Check & notify the user whether it is a leap year or
//! not.
var checkLeapYear = +prompt("Check leap Year");
if ((checkLeapYear % 4 === 0 && checkLeapYear % 100 !== 0) || (year % 400 === 0)) {
    console.log(checkLeapYear + " is leap Year.");
} else {
    console.log("Is Not leap Year");
}

//! Program 10 - Write a program that
//! a. Store correct password in a JS variable.
//! b. Asks user to enter his/her password
//! c. Validate the two passwords:
//! i. Check if user has entered password. If not, then give
//! message “ Please enter your password”
//! ii. Check if both passwords are same. If they are same,
//! show message “Correct! The password you entered
//! matches the original password”. Show “Incorrect
//! password” otherwise.

var EnterPassword = prompt("Enter Your Password")
var correctPassword = "fuzail#123";
if (EnterPassword == correctPassword) {
    console.log("!Correct Password",correctPassword);
} else {
    console.log("Incorrect Password");
}

//! Program 11 - Write a program that adds an else statement to the following
//! script to display “You are not Fahad”
//! var firstName = "Ali";
//! if (firstName === "Fahad") {
//!  document.write("Hello Fahad!");
//! }

var enterName = prompt("Enter Your Name");
var firstName = "Fahad";
if (enterName == firstName) {
    document.write("<h1>Hello Fahad</h1>")
} else {
    document.write("<h1>You are not Fahad</h1>")
}

//! Program 12 - This if/else statement does not work. Try to fix it:
//!  var greeting;
//!  var hour = 13;
//!  if (hour < 18) {
//!  greeting = "Good day";
//!  else
//!  greeting = "Good evening";
//!  } 


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
}
else {
    greeting = "Good evening";
    console.log(greeting);
} 

//! Program 13 - Write a JavaScript program that accept two integers and
//! display the larger. Also show if the two integers are equal.
// not solving 

//! Program - 14 Write a program that takes input a number from user & state
//! whether the number is positive, negative or zero.
var checkNegPosORZero = prompt("Enter Number");
if (checkNegPosORZero > 0) {
    console.log("Number is Positive");
} 
else if (checkNegPosORZero == 0){
    console.log("Number is Zero");
}
else {
    console.log("Number is Negative");
}

//! Program - 15 Ask the user what the current hour is. If the hour is between
//! 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
//! between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
//! the hour is between 5 and 8 p.m., tell the user, "It's dinner
//! time." For any other hours, tell the user, "Sorry, you'll have to
//! wait, or go get a snack." (Hint: Store the hour in 24 hours clock
//! format i.e. 14 for 2pm , 15 for 3pm)

var currentHour = +prompt("Enter Current Hour");
if (currentHour >= 6  && currentHour <= 9  ) {
    console.log("Breakfast is served. ");
}
else if(currentHour >= 11 && currentHour <= 13){
    console.log("Time for lunch.");
} 
else if(currentHour >= 17 && currentHour <= 20){
    console.log("It's dinner time.");
} 
else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}

//! Program - 16 Write a program that stores value in a variable & tell whether
//! the type of that variable is a "number", "string", "boolean" or
// !“undefined”
var checkType = true;
if (typeof checkType == String || Number || Boolean || undefined) {
    console.log(typeof checkType);
    
} else{
    console.log("Other Type");
}

//! Program - 17 Write a program that takes a character (i.e. string of length 1)
//! and returns true if it is a vowel, false otherwise.
var checkVowel = prompt("Enter Value");
if (checkVowel == 'a' || checkVowel == 'e' || checkVowel == 'i' || checkVowel == 'o' || checkVowel == 'u') {
    console.log(true);
} else {
    console.log(false);
}
//! Program 18 Choose the correct comparison operator to display "true",
//! when:
//! 10 is NOT equal to 8.
console.log(10 != 8); // true

//! Program - 19 Use a switch statement to rewrite the following JavaScript
//! code. Prompt the user for the number of a month rather than
//! setting it to 8:

var month = +prompt("Enter Month Number");
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Number");
        break;
}
//! program 20 - Use a conditional (ternary) operator
var userAge = 18;
console.log(userAge >= 18 ? "Old enough" : "Too young");
