// myFunction(5);

// var  myFunction = function(y) {
//     return  y * y;
//     console.log("Answer",y * y);
// };//this is function definition so it will no produce output as function definitions are not hoisted

myFunction(50); //fuunction called

function myFunction(y) {
    // return  y * y;
    console.log("Answer", y * y);
} //function declaration (hoisted)


isItHoisted(); //function is called 

function isItHoisted() {
    console.log("Yes!");
} //function declaration 

//----"MOVING DECLARATIONS TO TOP"---DECLARATIONS ARE HOISTED NOT INITIALIZATION
//Hoisting : a variable can be used before it has been declared.
//Hoisting applies to variable as well as function declarations.

//EXAMPLE of VARIABLE HOISTING
//1.
var x; //variable declared
x = 5; //variable initialized
console.log(x);

//2.
x = 5; //  varible is initialized
console.log(x);
var x; // variable is declared here so it is hoisted

//EXAMPLE of FUNCTION HOISTING
// var definitionNotHoisted;// function declaration which came from 51 line

// Outputs: "Definition hoisted!"
definitionHoisted(); // function is called

// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
} // function is declared and defined here.. so it will be hoisted as only function declarations are hoisted
// here function had declaration as well as definition which are tightly bound.

var definitionNotHoisted = function() {
    console.log("Definition not hoisted!");
}; //(Not hoisted as this is a function expression)

// definitionNotHoisted = function() {
//     console.log("Definition not hoisted!");
// }; // function definition is not tightly bound in this so it is not hoisted. so output will be undefined when function will be called.
