myFunction();

// code here can use carName as a global variable
console.log("I can display " + carName);

function myFunction() {
    carName = "Volvo";
}
// (Variables created without the keyword var, are always global, even if they are created inside a function)
