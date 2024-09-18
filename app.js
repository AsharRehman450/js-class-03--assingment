// CHAPTER 9 TO 10

// 1.

// var city = prompt("Enter your city");

// if (city === "karachi") {

//  alert("welcome to the city of lights");

// }
// else {

//     console.log("you lived in " + city);

// }

// 2.

// var gender = prompt("Enter your gender");

// if (gender === "male"){

//  alert("good morning sir");

// }
//  else if (gender === "female") {

//     alert("welcome maa'm ");

//  }

//  else  {
//     alert("inavlid gender")
//  }

// 3.

// var color = prompt("Enter signal color");

// if (color === "red"){

//     alert("Must stop" , color);

// }

// else if (color == "yellow") {

//     alert("Ready to move");

// }

// else if (color == "green") {

//     alert("Move now");

// }


// else {
//     alert("invalid" + " " + color + " " + "color");
// }

// Q4

// var fuel = prompt("enter remaining fuel");

// if (fuel <= 0.25) {

//     alert("Please refill the fuel in your car")

// }

// else {

//     alert("you have enough fuel !");
// }

// Q5

// 1.
// var a = 4;

// if (++a === 5){

// alert("given condition for variable a is true");

// }

// 2.

// var b = 82;

// if (b++ === 83){

// alert("given condition for variable b is false");

// }

// 3.

// var c = 12;

// if (c++ === 13){

// alert("condition 1 is false");

// }

// if (c === 13){

// alert("condition 2 is true");

// }

// if (++c < 14){

// alert("condition 3 is false");

// }

// if(c === 14){

// alert("condition 4 is true");

// }

// 4.

// var materialCost = 20000;

// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {

//     alert("The cost equals");

// }

// 5. 

// if (true) {

//     alert("True");

// }

// if (false) {

//     alert("False");

// }

// 6.

// if ("car" < "cat") {

//     alert("car is smaller than cat");
//     // console.log("this is true");
// }

// 6.

// var percentage = +prompt("Enter your percentage");

// if (percentage >= 80) {

//     alert("A-one grade , Exellent !");

// }

// else if (percentage >= 70) {

//     alert("A-grade , Good !");

// }

// else if (percentage >= 60) {

//     alert("B grade , You need to improve  !");

// }

// else {
//     alert("Fail ,  sorry ")
// }


// 7.

// var number = prompt("Guess the secret number ranging from 1 ");

// if (number == 7){

//     alert("Bingoooo !!!!  Correct answer");

// }

// else if (number == 8){

//     alert("Close enought to the correct answer");

// }

// else {
//     alert("You are far enough");
// }


// // 8.

// var temperature = +prompt("Enter  temperature");

// if (temperature >= 40) {

//     alert("its to hot outside");
// }

// else if (temperature >= 30){
 
//     alert("The Weather today is Normal.");

// }


// else if (temperature >= 20){
 
//     alert("Today’s Weather is cool.");

// }


// else if (temperature >= 10){
 
//     alert("OMG! Today’s weather is so Cool.");

// }

// else {
//     alert("invalid temperature");
// }



// chapter 12 to 13

// var userInput = prompt("Enter a single character:")


// if (userInput >= '0' && userInput <= '9') {

//     alert ("The character is a number.");

// }

// else if (userInput >= 'A' && userInput <= 'Z') {

//     alert("The character is an uppercase letter.");

// }

// else if (userInput >= 'a' && userInput <= 'z') {

//     alert("The character is an lowercase letter.");

// }

// else {

//     alert(`${userInput} is neither a number nor a letter.`);
// }


// Q2


    // var num1 = +prompt("Enter the first integer:");
    // var num2 = +prompt("Enter the second integer:");

    // if (isNaN(num1) || isNaN(num2)) {
    //     alert("Please enter valid integers.");
    // } else if (num1 > num2) {
    //     alert(`${num1} is larger than ${num2}.`);
    // } else if (num2 > num1) {
    //     alert(`${num2} is larger than ${num1}.`);
    // } else {
    //     alert(`Both numbers are equal.`);
    // }

//  Q3

// var input = prompt("Enter number");

// if (input > 0) {

//     alert("The number is positive")

// }
//  else if (input < 0) {

//     alert("The number is negative")

//  }

//  else {
//     alert("The number is zero")
//  }


// Q4 

//  function isVowel(char) {
//         // Convert the character to lowercase

//      char = char.toLowerCase(isVowel);
    
//         // Check if the character is a vowel

//     return 'aeiou'.includes(char);
//  }
    
    
// var userInput = prompt("Enter a single character:");
    
    
//  if (userInput.length === 1 ) {
       
//     alert(isVowel(userInput), "The character is a vowel." , "The character is not a vowel.");
    
//     }
    
//  else {
    
//     alert("Please enter a single character.");
    
//  }

// Q5


// var correctPassword = "myHome123";

// var userPassword = prompt("Please enter your password:");

// if (!userPassword) {
    
//   alert("Please enter your password.");
// } 
// else if (userPassword === correctPassword) {

//   alert("Correct! The password you entered matches the original password.");

// } else {

//   alert("Incorrect password.");

// }


// Q6

// var greeting;
// var hour = 13;

// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }

// Q7

// var time = +prompt("Enter the time in 24-hour format (e.g., 1900 ");

// if (time >= 0 && time < 1200) {

//     alert("Good morning!");

// } 

//    else if (time >= 1200 && time < 1700) {

//     alert("Good afternoon!");

// }

//   else if (time >= 1700 && time < 2100) {

//     alert("Good evening!");

// } 
//   else if (time >= 2100 && time <= 2359) {

//     alert("Good night!");

// } 

//    else {

//     alert("Invalid time entered. Please enter a valid time between 0000 and 2359.");
// }



// chapter 10 to 14

// 1.

// var city = "Karachi";

//  if (city = "Karachi"){

//     console.log("The City OF Lights");
//  }

// 2.*****

// if (x === y) {
//     // Display a prompt asking for the value of z and assign it to another variable
//     let zValue = prompt("Enter the value of z:");
    
//     // Optional: You can log or use the zValue
//     alert("The value of z is:", zValue);
//   }
  
// 3

// var city = prompt("Enter your city ZipCode");

// if (city == 10010) {
//     alert("Karachi");
// }

// else {
//     alert("Please write correct city");
// }

// 4.

// var x = 1;

// if (x === 1) {

//   x = 5;

// }

// console.log(x);

//  chapter 11

// 1

// if (x !== y) {

//     // Code to execute if x is not equal to y

//   }
  
// 2

// if (x >= y) {

//     // Code to execute if x is greater than or equal to y

//   }

//   3

// var x = 10;

// if (x !== 5) {

//   x = 5;

// }

// console.log(x);

// 4

// var number = 10;

// if (number !== 5) {

//   alert("Congratulations! The numbers are not equal.");
// }

// 5.

// var enteredName = prompt("Enter your name");
// var otherName = "ali"

// if (enteredName !== otherName); {
//     alert("NO match !")
// }

// chapter 12

// 1

// var value1 = 60; 
// var value2 = 30;


// if (value1 >= value2) {

//     alert("Value1 is greater than or equal to Value2");

// }

// else {

//    alert("Value1 is less than Value2");

//   }

// 2.

    // var totalMarks = +prompt("Enter the total marks:");
    // var obtainedMarks = +prompt("Enter the obtained marks:");

    // var percentage = (obtainedMarks / totalMarks) * 100;
    
    // var grade;

    // if (percentage >= 80) {
    //     grade = "A+";
    // }
    //  else if (percentage >= 70) {
    //     grade = "A";
    // }
    //  else if (percentage >= 60) {
    //     grade = "B";
    // }
    //  else if (percentage >= 50) {
    //     grade = "C";
    // }

    // alert(`Percentage: ${percentage} % \nYour grade is ${grade}`);

// 3.

// let a = 15;  

// if (a === 10) {

//   alert("a is 10");

// } else {

//   alert(`The correct value of a is ${a}`);

// }

// 4.

    // var city = prompt("Enter the name of a city:");

    // if (city === "karachi") {

    //     alert("You entered Karachi.");

    // } 
    // else if (city === "lahore") {

    //     alert("You entered Lahore.");

    // } 
    // else {

    //     alert("This is neither Karachi nor Lahore.");

    // }

// chapter 13


// Q1

// if (a === b) {

//     if (c === d) {

//         // Code to execute if both conditions are true

//     }
// }

// Q2

// if (a === b) {

//     // Code to execute if a is equal to b
// }

// else if (c !== d) {

//     // Code to execute if c is not equal to d

// }

// Q3

// if(name === hamza){

//     if (age < 60) {

//         // Code to execute if name is "Hamza" and age is less than 60

//     }
// }

// if (name === "Arsalan") {

//     if (age < 60) {

//         // Code to execute if name is "Arsalan" and age is less than 60

//     }
// }

// Q4

// var num1 = 80 
// var num2 = 30

// if (num1 < num2) {

//     alert("num1 is less than num2.");

// } 

// if (num1 > num2) {

//     alert("num1 is greater than num2.");

// }

// Q5

// var firstName = "Ali"
// var lastName = "Khan"

// var inputFirstName = prompt("Enter your fistname ");
// var inputLastName = prompt("Enter your lastname ");

// if(inputFirstName === "Ali"){

//     if(inputLastName === "Khan"){

//         alert("Your names match!");

//     }
// }

// else{

//     alert("your name not match!");

// }

// chapter 14
// 1.

// var password = prompt("Enter your password");

// if(password !== ""){
    
//     if(password.length <= 5){

//         alert("Password must be greater than 5");
//     }

// else{

//     alert("OK");
    
//     }
// }

// 2.

// var a = +prompt("Enter a value for a:"); 
// var c = prompt("Enter a value for c:"); 

// if (a === 1) { 

//     if (c === "Max") { 

//         alert("OK"); 

//     }
// }


// 4.
    // var num1 = 5;
    // var num2 = 5;

    // // 
    // if (num1 === num2) {  

    //     if (num1 <= num2) {
        
    //         alert("Both conditions are true: num1 is equal to num2 and num1 is less than or equal to num2.");
    //     }
    // }