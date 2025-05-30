// //! 1.write a program print 5 time hello world
// for (var i = 1; i <= 5; i++) {
//     document.write("Hello World" + "<br>")
// }
// //! 2. Write a program to print numeric counting from 1 to 10.
// for(var  i = 1; i <= 10; i++){
//     console.log(i);
// }
// //! 3.Table
// var tableCount = +prompt("Enter Table Count");
// var tableNumber = +prompt("Enter Table Number");

// for (var i = 1; i <= tableCount; i++) {
//     console.log(tableNumber + " x " + i + " = " + i * tableNumber);
// }

// //! 4 print array
// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for(var i = 0; i < A.length; i++){
//     console.log(A[i]);
// }

// //! 5 Print array with index number
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     console.log("Element at index " + fruits.indexOf(fruits[i]) + " is " + fruits[i]);
// }

// //! 6 user item program 
// var itemCount = +prompt("Enter Item Quantity");
// var storeItem = [];

// for (var i = 0; i < itemCount; i++) {
//     storeItem.push(prompt("Enter Item Name"));
// }

// //! 7. Generate the following series in your browser. See example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for (var i = 1; i <= 15; i++){
//     console.log(i);
// }
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// for (var i = 10; i > 0; i--){
//     console.log(i);
// }
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// for (var i = 0; i <= 20;i++ ){
//     if (i % 2 == 0) {      
//         console.log(i);
//     } 
// }
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for (var i = 0; i <= 20;i++ ){
//     if (i % 2 != 0) {      
//         console.log(i);
//     } 
// }
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for (var i = 2000; i <= 20000; i++) {
//     if (i % 2000 == 0) {
//         console.log("Rs." + i );
//     }
// }

// //! 8.Find item in array
// var items = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var findItem = prompt("Find Your Item");

// for(var i = 0; i < items.length; i++){
//     if (items.indexOf(findItem) != -1) {
//         console.log( findItem + " is Available at index " + items.indexOf(findItem));
//         break;
//     }
// }
// //! Find Largest Number
// var num = [22,35,25,88,10];
// var largeNum = num[0]; // assue this is largest value 

// for(var i = 0; i < num.length; i++){
//     if (num[i] > largeNum) {
//         largeNum = num[i]  // update value
//     }
// }
// console.log("largest Number is : " + largeNum);

// //! Find Smallest Number
// var num1 = [22,35,25,88,10];
// var smallNum = num1[0];

// for(var i = 0; i < num1.length; i++){
//     if (num[i] < smallNum) {
//         smallNum = num1[i];
//     }
// }
// console.log("Smallest Number is : " + smallNum);

//! find Largest and Smallest number in array
var num2 = [24, 53, 78, 91, 12,0,1000];
var findLargest = num2[0];
var findSmall = num2[0];

for (var i = 0; i < num2.length; i++) {
    if (num2[i] > findLargest ) {
        findLargest = num2[i];
    }
    if (num2[i] < findSmall) {
        findSmall = num2[i];
    }
}
console.log("largest Number is : " + findLargest);
console.log("Smallest Number is : " + findSmall);

//! 12. Write a program to print multiples of 5 ranging 1 to 100

for (var i = 5; i <= 100; i = i + 5){
    console.log(i);
}

//! 13.html table


//! 14.stop array user input
var flag = false;
var scores = [12, 45, 3, 22, 34, 50];
var stopArray = +prompt("Enter Stop Value");
for(var i = 0; i < scores.length; i++){

    console.log(scores[i]);
    if (stopArray == scores[i]) {
        flag = true;
        break;
    }
}

//! 15.new line loop
var nestedLoop = [ [1,2,3] , [4,5,6] , [7,8,9] ];
for(var i = 0; i < 3; i++){
    document.write(nestedLoop[i])
    document.write("<br>")
    
}

//! 16.repeatedly print the value
var repeatedly = +prompt("Enter Number");
for(var i = repeatedly ; i >= 0; i = i - 0.5){
    console.log(i);
}

//! 17.Even and Odd
var flag = false;
for(var i = 0; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(i + " is Even");
    }
    if (i % 2 != 0) {
        console.log(i + " is Odd");
    }
}