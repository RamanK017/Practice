// var a = 4;
function myFunction(x) {
    // return a * a;
    function innerFunction(y) {
        return y * x;
    }
    someFunction(innerFunction);
    // console.log("Answer",  a + a);// myFunction  access variable 'a' defined outside the function------>Function Closure
}

function someFunction(callBackFunction) {
    console.log(callBackFunction(9));
}

myFunction(100);

// (Variables created without the keyword var, are always global, even if they are created inside a function)
