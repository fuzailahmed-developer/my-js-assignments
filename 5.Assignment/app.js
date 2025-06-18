//! program - 1
// var city = "Hyderabad";
// var replace = city.replace("Hyder","Islam")
// console.log(replace);

// //! program - 2 
// var convert = "372";
// console.log(typeof Number(convert));
// console.log(Number(convert));

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