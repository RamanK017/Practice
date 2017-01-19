var promise = new Promise(function(resolve, reject) {
	x=10;
  if (x>1) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
var promise = new Promise(function(resolve, reject) {
  resolve(1);
});
promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
  return val +2;
}).then(function(val){
	console.log(val);
})
// PROMISES
// A promise represents the eventual result of an asynchronous operation.
// When a function returns a promise, it's essentially saying: 
// "here's my promise that I'll get back to you with the result as soon as I'm done working on it".
// A promise can be in one of three states: pending, fulfilled, or rejected.
// When created, the promise is in pending state.
// From here, it can either go to the fulfilled or rejected state

var q=require('q');
function async2(value) {  
    var deferred = q.defer();
    if(value === 0) {
    	//Consider this as an async API call success body
    	deferred.resolve("Acccepted as the value is equivalent to the future");
    }
    deferred.reject('rejected for demonstration!');
    return deferred.promise;//this "deferred.promise" helps to access defered.resolve and deferred.reject
}
var asyncPromise = async2(0); //
asyncPromise.then(function(resolvedData) {
	console.log("Resolved ", resolvedData);//deferred.promise helps to access deferred.resolve and get that from there to here.
}, function(rejectData) {
	console.log("Rejected ", rejectData);//deferred.promise helps to access deferred.reject and get that from there to here.
});
