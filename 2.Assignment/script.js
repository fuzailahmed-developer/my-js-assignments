//! ✅ Task 1: Online Order Processing System
var isLoggedIn = true;

if (isLoggedIn) {

    var productInStock = true;
    if (productInStock) {

        var walletBalance = 3000;
        var productPrice = 2500;
        if (walletBalance > productPrice && walletBalance - productPrice >= 500) {
            console.log("Congrats Your Order is Placed");
        }
        else{
            console.log("Your Order is Not Placed");
        }
    } 
    else {
        console.log("Product is Not InStock");
    }
}
else {
    console.log("User is Not loggedIn");
}

//! ✅ Task 2: Student Result Checker (Multiple else if)
var english = 85;
var math = 74;
var science = 96;
var computer = 66;
var urdu = 58;

if (english < 33 || math < 33 || science < 33 || computer < 33 || urdu < 33 ) {
    console.log("Fail");
} else {
    var totalMarks = english + math + science + computer + urdu;
    console.log(totalMarks);
    var average = totalMarks / 5;

    if (average >= 90) {
        console.log("Excellent");
    }
    else if (average >= 75){
        console.log("Very Good");
    }
    else if (average >= 60){
        console.log("Good");
    }
    else if (average >= 40){
        console.log("Needs Improvement");
    }
    else{
        console.log("Pass");
    }
}
if (english > 95 || science > 95 || computer > 95 || math > 95 || urdu > 95  ) {
    console.log("You Are 🎉 Eligible for Scholarship!");
}