//! program - 1
var city = "Hyderabad";
var replace = city.replace("Hyder","Islam")
console.log(replace);

// //! program - 2 
var convert = "372";
console.log(typeof Number(convert));
console.log(Number(convert));

//! program - 3 password validation program 

var userPassword = prompt("Enter Your Password");
var isAlphabet = false;
var isNumber = false;


if (userPassword.length >= 8) {
    
for(var i = 0; i < userPassword.length; i++){

    var char = userPassword[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
    {
        isAlphabet = true

    }
    if (char >= "0" && char <= "9" )
    {
        isNumber = true
    
    }
}

var charFirst = userPassword[0];
var checkFirstChar =  (charFirst >= 0 && charFirst <= 9);

if (isAlphabet && isNumber && !checkFirstChar) {
    console.log("Valid Password:", userPassword);
} 
else {
    console.log("Invalid Password: Must contain alphabets and numbers, and not start with a number.");
}
}
else {
        console.log("Invalid Password: Must be at least 8 characters long.");
}


//! program 4 - Email Validation

var userEmail = prompt("Enter Email Address");
var findSymbol = "@";
var stringNotEmpty = false;

for (var i = 0; i < userEmail.length; i++) {

    if (userEmail[i] == findSymbol) {
        if (i > 0) {
            var stringNotEmpty = true;
        }
    }
    break;
    
}
if (stringNotEmpty) {
    if (userEmail.endsWith("gmail.com") || userEmail.endsWith("gmail.org")) {
        console.log("Valid User Email : " + userEmail);
    }
    else{
        console.log("Only gmail.com or gmail.org domains are allowed.");
    }
}
else {
    console.log("Before the @, there should be at least one character");
}

//! program 5 

var positiveNum = prompt("Enter Number");
if (positiveNum > 0) {
    //? round 
    // console.log(Number(Math.round(positiveNum)));
    //? floor
    // console.log(Number(Math.floor(positiveNum)));
    //? ceil 
    console.log(Number(Math.ceil(positiveNum)));

} 
 else {
  console.log("Enter Positive Number");
}

//! program 6 - dice
//? 1
var dice1 = Math.ceil(Math.random() * 6);
console.log(dice1);
//? 2
var dice1 = Math.floor(Math.random() * 6) + 1;
console.log(dice1);

//! program 7 - count the

var str = "the quick brown fox jumps over the lazy dog";
var strTheCount = str.split(" ")
var countThe = 0;
for(var i = 0; i < strTheCount.length; i++){
    if (strTheCount[i] == "the") {
        countThe++
    }
}
console.log(countThe);


//! program - 10 decimal 
var decimal = 11.1111111;
console.log(Number(decimal.toFixed(2)));


//! program - 11 mean
var sum = 0;
var numOfCount = Number(prompt("Enter Number of Count"));
for(var i = 0; i < numOfCount; i++){
    var userNum = Number(prompt("Enter Number"));
    sum = sum + userNum;
} 

var findMean = sum / numOfCount;
console.log("Mean of All Degit" + findMean);


//! program 12 
var date = new Date().getDate();
if (date <= 15) {
    console.log("First Fifteenth days of the Month");
} else {
    console.log("Last Fifteenth days of the Month");
}


//! program 13 - find minutes and millisecond
// 1 current Date
var currDate = new Date();
console.log(currDate);
// 2 millisecond form jan 1 1970
var millisecond = currDate.getTime();
console.log(millisecond);
// 3 minutes from jan 1 1970
var  minutes = millisecond / (1000 * 60 )
console.log(Math.floor(minutes));

//! program 14
var currentDate = new Date();
var oneHoursAgo = new Date("Jun 18 2025 17:30:24");
console.log(currentDate);
console.log(oneHoursAgo);


//! program 15
var userAge = Number(prompt("Enter Your Age"));
var currYear = currentDate.getFullYear();
var calculate = currYear - userAge;
console.log(calculate);