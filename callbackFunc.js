// var callback = function() {
//     console.log("Done!");
// }

// setTimeout(callback, 5000);

function functionOne(x) { console.log(x); }

function functionTwo(var1, callback) {
    callback(var1);
}

functionTwo(2, functionOne);
